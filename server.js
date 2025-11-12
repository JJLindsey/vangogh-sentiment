import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

const SERPAPI_KEY = process.env.VUE_APP_SERPAPI_KEY;

if (!SERPAPI_KEY) {
  console.error('ERROR: SERPAPI_KEY not found in environment variables');
  console.error('Please create a .env file with SERPAPI_KEY=your_key_here');
}

// ============================================
// API ROUTES
// ============================================

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Scholar API backend is running!',
    hasApiKey: !!SERPAPI_KEY
  });
});

// Fetch Van Gogh publications
app.get('/api/scholar/publications', async (req, res) => {
  try {
    const { query = 'Vincent van Gogh art history', num = 20 } = req.query;

    console.log(`Fetching ${num} publications for: ${query}`);

    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        api_key: SERPAPI_KEY,
        engine: 'google_scholar',
        q: query,
        num: parseInt(num),
        hl: 'en'
      }
    });

    if (response.data.organic_results) {
      const processed = processScholarResults(response.data.organic_results);
      res.json({
        success: true,
        count: processed.length,
        data: processed
      });
    } else {
      res.json({
        success: false,
        message: 'No results found',
        data: []
      });
    }
  } catch (error) {
    console.error('Error fetching publications:', error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to fetch publications from Google Scholar'
    });
  }
});

// Fetch publications by year range
app.get('/api/scholar/publications-by-year', async (req, res) => {
  try {
    const { startYear, endYear } = req.query;

    if (!startYear || !endYear) {
      return res.status(400).json({
        success: false,
        message: 'startYear and endYear are required'
      });
    }

    console.log(`Fetching publications from ${startYear} to ${endYear}`);

    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        api_key: SERPAPI_KEY,
        engine: 'google_scholar',
        q: 'Vincent van Gogh',
        as_ylo: parseInt(startYear),
        as_yhi: parseInt(endYear),
        num: 20,
        hl: 'en'
      }
    });

    const publicationsByYear = {};

    if (response.data.organic_results) {
      response.data.organic_results.forEach(result => {
        const year = extractYear(result);
        if (year) {
          if (!publicationsByYear[year]) {
            publicationsByYear[year] = [];
          }
          publicationsByYear[year].push(processPublication(result));
        }
      });
    }

    res.json({
      success: true,
      data: publicationsByYear
    });
  } catch (error) {
    console.error('Error fetching publications by year:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Fetch citation trends by decades
app.get('/api/scholar/citation-trends', async (req, res) => {
  try {
    const decades = [1990, 2000, 2010, 2020];
    const citationData = {};

    console.log('Fetching citation trends by decade...');

    for (const decade of decades) {
      try {
        const response = await axios.get('https://serpapi.com/search.json', {
          params: {
            api_key: SERPAPI_KEY,
            engine: 'google_scholar',
            q: 'Vincent van Gogh',
            as_ylo: decade,
            as_yhi: decade + 9,
            num: 20,
            hl: 'en'
          }
        });

        if (response.data.search_information) {
          citationData[decade] = {
            decade: `${decade}s`,
            totalResults: response.data.search_information.total_results || 0,
            publications: response.data.organic_results?.length || 0
          };
        }

        // Rate limiting - wait 1 second between requests
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error) {
        console.error(`Error fetching decade ${decade}:`, error.message);
        citationData[decade] = {
          decade: `${decade}s`,
          error: error.message
        };
      }
    }

    res.json({
      success: true,
      data: citationData
    });
  } catch (error) {
    console.error('Error fetching citation trends:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Fetch author profile
app.get('/api/scholar/author/:authorId', async (req, res) => {
  try {
    const { authorId } = req.params;

    console.log(`Fetching author profile: ${authorId}`);

    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        api_key: SERPAPI_KEY,
        engine: 'google_scholar_author',
        author_id: authorId,
        hl: 'en'
      }
    });

    const authorData = {
      name: response.data.author?.name || '',
      affiliations: response.data.author?.affiliations || '',
      citedBy: response.data.cited_by?.table?.[0]?.citations?.all || 0,
      publications: response.data.articles || []
    };

    res.json({
      success: true,
      data: authorData
    });
  } catch (error) {
    console.error('Error fetching author profile:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============================================
// HELPER FUNCTIONS
// ============================================

function processScholarResults(results) {
  return results.map(result => processPublication(result));
}

function processPublication(result) {
  return {
    title: result.title || '',
    link: result.link || '',
    snippet: result.snippet || '',
    publicationInfo: result.publication_info?.summary || '',
    year: extractYear(result),
    citations: result.inline_links?.cited_by?.total || 0,
    citationLink: result.inline_links?.cited_by?.link || '',
    relatedArticles: result.inline_links?.related_pages_link || '',
    authors: extractAuthors(result),
    source: result.publication_info?.summary || ''
  };
}

function extractYear(result) {
  // Try to extract year from publication_info
  if (result.publication_info?.summary) {
    const yearMatch = result.publication_info.summary.match(/\b(19|20)\d{2}\b/);
    if (yearMatch) {
      return parseInt(yearMatch[0]);
    }
  }

  // Try to extract from snippet
  if (result.snippet) {
    const yearMatch = result.snippet.match(/\b(19|20)\d{2}\b/);
    if (yearMatch) {
      return parseInt(yearMatch[0]);
    }
  }

  return null;
}

function extractAuthors(result) {
  if (result.publication_info?.authors) {
    return result.publication_info.authors.map(author => author.name);
  }

  // Try to extract from summary
  if (result.publication_info?.summary) {
    const authorMatch = result.publication_info.summary.split(' - ')[0];
    return authorMatch ? [authorMatch] : [];
  }

  return [];
}

// ============================================
// START SERVER
// ============================================

const server = app.listen(PORT, () => {
  console.log('===========================================');
  console.log(`Scholar API Backend running on port ${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/api/test`);
  console.log(`API Key loaded: ${SERPAPI_KEY ? 'Yes' : 'No'}`);
  console.log('===========================================');
});

// Handle shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
