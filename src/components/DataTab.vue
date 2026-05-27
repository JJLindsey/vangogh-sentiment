<template>
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
          <li>Historical popularity tracking (1980-2025)</li>
          <li>Museum visitor reviews (aggregated patterns)</li>
          <li>Sentiment analysis using natural language processing</li>
          <li>Google Trends data (2004-present)</li>
          <li>Auction price indices and market analysis</li>
          <li>Brand collaboration data: <a href="https://www.vangoghmuseum.nl" class="text-blue-700 hover:underline" target="_blank">Van Gogh Museum official sources</a></li>
        </ul>
      </div>
    </div>
    <div>
      <h4>About</h4>
      <p>
        This analysis began while building the LEGO Van Gogh Sunflowers set, an official Van Gogh Museum collaboration. The question of how a rejected 19th-century artist ends up on a mass-market toy led to a deeper investigation into 150 years of academic reception, sentiment data, and commercial partnerships. The "Posthumous Popularity Paradox" is the gap between Van Gogh's rejection in life and his cultural dominance in death.
      </p>
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
</template>
<script>
  export default {
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
