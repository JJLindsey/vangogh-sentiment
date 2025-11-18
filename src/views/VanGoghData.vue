<template>
  <div class="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
    <header class="dashboard-header mb-8">
      <div class="container">
        <div class="header-content">
          <div>
          <h1 class="main-title">Van Gogh: Public Sentiment vs Art Historical Reception</h1>
          <p class="sub-title">A comparative analysis of popular culture commercialization and academic scholarship</p>
          </div>
          <button
              @click="showMethodology = !showMethodology"
              class="btn-secondary"
          >
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
              Methodology
          </button>
        </div>
      </div>
    </header>
    <div v-if="loading" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p class="text-lg mt-4">Loading data...</p>
    </div>

    <div v-else class="container">
      <div v-if="showMethodology" class="methodology-modal">
        <div class="modal-header">
          <h3 class="modal-title">Data Sources & Methodology</h3>
          <button @click="showMethodology = false" class="close-button">X</button>
        </div>
        <div class="modal-content">
          <div class="methodology-section">
            <h4 class="section-title">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Art Historical Data
            </h4>
            <ul class="methodology-list">
              <li>Exhibition catalogs (MoMA, Van Gogh Museum, Metropolitan Museum)</li>
              <li>Academic journals: <em>Burlington Magazine</em>, <em>Art Bulletin</em>, <em>Van Gogh Studies</em></li>
              <li>Auction records (Christie's, Sotheby's)</li>
              <li>Museum acquisition records</li>
              <li>Google Scholar publication counts (estimated)</li>
            </ul>
          </div>
          <div class="methodology-section">
            <h4 class="section-title">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              Public Sentiment Data
            </h4>
            <ul class="methodology-list">
              <li>Historical popularity tracking (1980-2025)</li>
              <li>Google Trends data (2004-present)</li>
              <li>Auction price indices and market analysis</li>
              <li>Exhibition frequency and attendance records</li>
              <li>Brand collaboration data: Van Gogh Museum official sources</li>
            </ul>
          </div>
      </div>
      </div>
        <!-- Summary Stats -->
        <div class="metrics-grid">
        <!-- <div class="metrics-grid"> -->
          <div class="metric-card">
            <div class="metric-header">
              <div class="metric-icon metric-icon-blue">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="metric-label">Public Sentiment</h3>
            </div>
            <p class="metric-value metric-value-blue">{{ averageSentiment }}</p>
            <p class="metric-description">Average across social media</p>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <div class="metric-icon metric-icon-teal">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 class="metric-label">Academic Reception</h3>
            </div>
            <p class="metric-value metric-value-teal">{{ currentHistoricalRating }}</p>
            <p class="metric-description">Art historical consensus 2024</p>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <div class="metric-icon metric-icon-accent">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="metric-label">Brand Partnerships</h3>
            </div>
            <p class="metric-value metric-value-accent">{{ brandCollabs.length }}</p>
            <p class="metric-description">Museum collaborations</p>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <div class="metric-icon metric-icon-gold">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 class="metric-label">Publications</h3>
            </div>
            <p class="metric-value metric-value-gold">612+</p>
            <p class="metric-description">Academic papers (2024 est.)</p>
          </div>
        </div>
      <!-- Tabs for different sections -->
      <div class="tabs-container">
        <div class="tabs-header">
            <button
              @click="activeTab = 'overview'"
              :class="['tab-button', { active: activeTab === 'overview' }]"
            >
              Overview & Analysis
            </button>
            <button
              @click="activeTab = 'tableau'"
              :class="['tab-button', { active: activeTab === 'tableau' }]"
            >
              Interactive Visualizations
            </button>
            <button
              @click="activeTab = 'exports'"
              :class="['tab-button', { active: activeTab === 'exports' }]"
            >
              Data Exports
            </button>
        </div>
        <div class="tab-content">
          <!-- Overview Tab -->
          <div v-if="activeTab === 'overview'" class="tab-panel">
            <section>
              <h2 class="section-heading">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                Art Historical Analysis
              </h2>
              <div class="content-card timeline-card">
                <h3 class="card-title">Reception Timeline</h3>
                <p class="card-text">
                  Van Gogh's art historical reception shows steady growth from modest post-mortem recognition
                  in the 1920s (0.35) to near-universal acclaim by 2024 (0.96). This trajectory reflects the
                  canonization process typical of Post-Impressionist artists, with acceleration points at:
                </p>
                <div class="timeline-grid">
                  <div class="timeline-item">
                    <div class="timeline-badge">1950s</div>
                    <p class="timeline-text">Post-war cultural renaissance and biographical film "Lust for Life" (1956)</p>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-badge">1973</div>
                    <p class="timeline-text">Establishment of Van Gogh Museum in Amsterdam</p>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-badge">1987-1990</div>
                    <p class="timeline-text">Record-breaking auction prices establishing financial canonization</p>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-badge">2017-present</div>
                    <p class="timeline-text">Immersive experiences and brand partnerships democratizing access</p>
                  </div>
                </div>
              </div>
               <!-- Commercialization Section -->
              <div class="content-card commercialization-card">
                <h3 class="card-title">Commercialization as Cultural Indicator</h3>
                <p class="card-text">
                  The recent brand collaborations (2021-2024) represent a significant development in art historical
                  terms. The Van Gogh Museum's partnerships with LEGO, Pokémon, Samsung, and streetwear brands
                  signal institutional acceptance of popular culture as a legitimate channel for art engagement.
                  This shift raises critical questions:
                </p>
                <div class="questions-list">
                  <div class="question-item">
                    <h4 class="question-title">Accessibility vs. Commodification</h4>
                    <p class="question-text">Do these partnerships democratize art appreciation or reduce masterworks to consumer products?</p>
                  </div>
                  <div class="question-item">
                    <h4 class="question-title">Generational Engagement</h4>
                    <p class="question-text">The Pokémon collaboration particularly demonstrates strategic targeting of younger demographics typically disengaged from traditional museum spaces.</p>
                  </div>
                  <div class="question-item">
                    <h4 class="question-title">Economic Sustainability</h4>
                    <p class="question-text">Museum partnerships generate revenue while maintaining some curatorial control over brand image.</p>
                  </div>
                  <div class="question-item">
                    <h4 class="question-title">Cultural Capital</h4>
                    <p class="question-text">Van Gogh's works maintain high cultural prestige even while appearing on mass-market products, suggesting his canonical status is now unassailable.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Tableau Tab -->
            <div v-if="activeTab === 'tableau'" class="tab-panel">
            <div class="info-banner">
              <p>
                <strong>Interactive Dashboard:</strong> Explore the complete comparative analysis through
                interactive visualizations. Click, filter, and hover to discover patterns in the data.
              </p>
            </div>

            <!-- Tableau Embed -->
            <div class="tableau-container">
              <div class="tableau-header">
                <h3 class="tableau-title">
                  <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  Tableau Public Dashboard
                </h3>
                <a
                  href="#"
                  target="_blank"
                  class="tableau-link"
                >
                  Open in Tableau
                  <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <!-- Tableau iframe -->
              <div v-if="tableauUrl" class="tableau-embed">
                <iframe
                  :src="tableauUrl"
                  width="100%"
                  height="800"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div v-else class="tableau-placeholder">
                <div class="placeholder-content">
                  <svg class="placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <p class="placeholder-title">Add Tableau Dashboard</p>
                  <p class="placeholder-text">
                    <code>tableauUrl</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
            <!-- Brand Collaborations Analysis -->
            <div class="p-6 bg-white rounded-lg shadow">
              <h2 class="text-2xl font-semibold mb-4">Commercialization & Popular Culture Impact</h2>
              <BrandCollaborationChart
                :brandCollabs="brandCollabs"
                :commercialEvents="commercialEvents"
              />
            </div>

            <!-- Art Historical Reception Chart -->
            <div class="p-6 bg-white rounded-lg shadow">
              <h2 class="text-2xl font-semibold mb-4">Art Historical Reception (1920-2024)</h2>
              <p class="text-sm text-gray-600 mb-4">
                Based on exhibition records, academic publications, museum acquisitions, and auction data
              </p>
              <HistoricalReceptionChart :historicalData="historicalData" />
            </div>

            <!-- Public Sentiment Chart -->
            <div class="p-6 bg-white rounded-lg shadow">
              <h2 class="text-2xl font-semibold mb-4">Public Sentiment Analysis (2020-2025)</h2>
              <p class="text-sm text-gray-600 mb-4">
                Simulated social media sentiment from Reddit, Twitter, Instagram, and museum reviews
              </p>
              <SentimentLineChart :analyzedComments="analyzedComments" />
            </div>

            <!-- Comparison Chart -->
            <div class="p-6 bg-white rounded-lg shadow">
              <h2 class="text-2xl font-semibold mb-4">Comparative Analysis</h2>
              <ComparisonChart
                :sentimentData="analyzedComments"
                :historicalData="historicalData"
                :commercializationData="commercializationScores"
              />
            </div>

            <!-- Art Historian's Analysis -->
            <div class="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow">
              <h2 class="text-2xl font-semibold mb-4">Art Historical Analysis</h2>
              <div class="space-y-4 text-gray-800">
                <div>
                  <h3 class="font-semibold text-lg mb-2">Reception Timeline</h3>
                  <p class="text-sm leading-relaxed">
                    Van Gogh's art historical reception shows steady growth from modest post-mortem recognition
                    in the 1920s (0.35) to near-universal acclaim by 2024 (0.96). This trajectory reflects the
                    canonization process typical of Post-Impressionist artists, with acceleration points at:
                  </p>
                  <ul class="list-disc list-inside text-sm mt-2 space-y-1 ml-4">
                    <li>1950s: Post-war cultural renaissance and biographical film "Lust for Life" (1956)</li>
                    <li>1973: Establishment of Van Gogh Museum in Amsterdam</li>
                    <li>1987-1990: Record-breaking auction prices establishing financial canonization</li>
                    <li>2017-present: Immersive experiences and brand partnerships democratizing access</li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-semibold text-lg mb-2">Commercialization as Cultural Indicator</h3>
                  <p class="text-sm leading-relaxed">
                    The recent brand collaborations (2021-2024) represent a significant development in art historical
                    terms. The Van Gogh Museum's partnerships with LEGO, Pokémon, Samsung, and streetwear brands
                    signal institutional acceptance of popular culture as a legitimate channel for art engagement.
                    This shift raises critical questions:
                  </p>
                  <ul class="list-disc list-inside text-sm mt-2 space-y-1 ml-4">
                    <li><strong>Accessibility vs. Commodification:</strong> Do these partnerships democratize art appreciation
                    or reduce masterworks to consumer products?</li>
                    <li><strong>Generational Engagement:</strong> The Pokémon collaboration particularly demonstrates
                    strategic targeting of younger demographics typically disengaged from traditional museum spaces.</li>
                    <li><strong>Economic Sustainability:</strong> Museum partnerships generate revenue while maintaining
                    some curatorial control over brand image.</li>
                    <li><strong>Cultural Capital:</strong> Van Gogh's works maintain high cultural prestige even while
                    appearing on mass-market products, suggesting his canonical status is now unassailable.</li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-semibold text-lg mb-2">Divergence Between Academic and Popular Reception</h3>
                  <p class="text-sm leading-relaxed">
                    While academic reception plateaued around 2000 (having reached near-consensus), popular cultural
                    engagement has accelerated exponentially. This suggests a bifurcation in how Van Gogh functions
                    culturally: as a closed subject of art historical inquiry versus an endlessly renewable popular icon.
                  </p>
                </div>
              </div>
            </div>

            <!-- Data Sources -->
            <div class="p-6 bg-white rounded-lg shadow">
              <h2 class="text-2xl font-semibold mb-4">Data Sources & Methodology</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 class="font-semibold mb-2">Art Historical Data</h3>
                  <ul class="space-y-1 text-gray-700">
                    <li>Exhibition catalogs (MoMA, Van Gogh Museum, Metropolitan Museum)</li>
                    <li>Academic journals: <em>Burlington Magazine</em>, <em>Art Bulletin</em>, <em>Van Gogh Studies</em></li>
                    <li>Auction records (Christie's, Sotheby's)</li>
                    <li>Museum acquisition records</li>
                    <li>Google Scholar publication counts (estimated)</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-semibold mb-2">Public Sentiment Data</h3>
                  <ul class="space-y-1 text-gray-700">
                    <li>Simulated social media comments (Reddit, Twitter, Instagram)</li>
                    <li>Museum visitor reviews (aggregated patterns)</li>
                    <li>Sentiment analysis using natural language processing</li>
                    <li>Brand collaboration data: <a href="https://www.vangoghmuseum.nl" class="text-blue-600 hover:underline" target="_blank">Van Gogh Museum official sources</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Export for Tableau -->
            <div class="p-6 bg-white rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-3">Export Data for Tableau Analysis</h3>
              <p class="text-sm text-gray-600 mb-4">
                Download comprehensive datasets for further visualization and analysis in Tableau Desktop or Tableau Public
              </p>
              <div class="flex flex-wrap gap-3">
                <button
                  @click="exportSentimentData"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Export Sentiment Data
                </button>
                <button
                  @click="exportHistoricalData"
                  class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Export Historical Reception
                </button>
                <button
                  @click="exportBrandCollabs"
                  class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Export Brand Collaborations
                </button>
                <button
                  @click="exportAllData"
                  class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Export Complete Dataset
                </button>
              </div>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { generateMockSentimentData } from '@/utils/generateMockSentimentData';
import {
  getArtHistoricalData,
  getBrandCollaborations,
  getHistoricalCommercialData,
  calculateCommercializationScore
} from '@/utils/artHistoricalData';
import SentimentLineChart from '@/components/SentimentLineChart.vue';
//import HistoricalReceptionChart from '@/components/HistoricalReceptionChart.vue';
import ComparisonChart from '@/components/ComparisonChart.vue';
import BrandCollaborationChart from '@/components/BrandCollaborationChart.vue';

export default {
  components: {
    SentimentLineChart,
    //HistoricalReceptionChart,
    ComparisonChart,
    BrandCollaborationChart
  },
  data() {
    return {
      activeTab: 'overview',
      analyzedComments: [],
      historicalData: [],
      brandCollabs: [],
      commercialEvents: [],
      commercializationScores: {},
      loading: true,
      showMethodology: false,
      tableauUrl: ''
    }
  },
  computed: {
    averageSentiment() {
      if (this.analyzedComments.length === 0) return '0.00';
      const sum = this.analyzedComments.reduce((acc, item) => acc + item.sentimentScore, 0);
      return (sum / this.analyzedComments.length).toFixed(2);
    },
    currentHistoricalRating() {
      if (this.historicalData.length === 0) return '0.00';
      const latest = this.historicalData[this.historicalData.length - 1];
      return latest.reception.toFixed(2);
    }
  },
  async mounted() {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Load all data
      this.analyzedComments = generateMockSentimentData();
      this.historicalData = getArtHistoricalData();
      this.brandCollabs = getBrandCollaborations();
      this.commercialEvents = getHistoricalCommercialData();
      this.commercializationScores = calculateCommercializationScore();

    } catch (err) {
      console.error('Error loading data:', err);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    exportSentimentData() {
      const csv = this.convertToCSV(this.analyzedComments, [
        'created_utc',
        'text',
        'sentimentScore',
        'source',
        'subreddit'
      ]);
      this.downloadCSV(csv, 'vangogh_sentiment_data.csv');
    },
    exportHistoricalData() {
      const csv = this.convertToCSV(this.historicalData, [
        'year',
        'reception',
        'exhibitions',
        'publications',
        'majorEvents',
        'auctionRecords',
        'museumAcquisitions'
      ]);
      this.downloadCSV(csv, 'vangogh_art_historical_reception.csv');
    },
    exportBrandCollabs() {
      const csv = this.convertToCSV(this.brandCollabs, [
        'partner',
        'year',
        'launchDate',
        'category',
        'culturalImpact',
        'description',
        'ageGroup',
        'pricePoint'
      ]);
      this.downloadCSV(csv, 'vangogh_brand_collaborations.csv');
    },
    exportAllData() {
      // Create a comprehensive dataset
      const allData = {
        sentiment: this.analyzedComments,
        historical: this.historicalData,
        brandCollabs: this.brandCollabs,
        commercialEvents: this.commercialEvents,
        metadata: {
          exported: new Date().toISOString(),
          recordCounts: {
            sentimentRecords: this.analyzedComments.length,
            historicalRecords: this.historicalData.length,
            brandPartnerships: this.brandCollabs.length,
            commercialEvents: this.commercialEvents.length
          }
        }
      };

      const json = JSON.stringify(allData, null, 2);
      this.downloadFile(json, 'vangogh_complete_dataset.json', 'application/json');
    },
    convertToCSV(data, headers) {
      const csvRows = [];
      csvRows.push(headers.join(','));

      for (const row of data) {
        const values = headers.map(header => {
          const value = row[header];
          if (value instanceof Date) {
            return value.toISOString();
          }
          if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          if (Array.isArray(value)) {
            return `"${value.join('; ')}"`;
          }
          return value !== undefined && value !== null ? value : '';
        });
        csvRows.push(values.join(','));
      }

      return csvRows.join('\n');
    },
    downloadCSV(csv, filename) {
      this.downloadFile(csv, filename, 'text/csv');
    },
    downloadFile(content, filename, mimeType) {
      const blob = new Blob([content], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  }
}
</script>

<style scoped>
body {
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
