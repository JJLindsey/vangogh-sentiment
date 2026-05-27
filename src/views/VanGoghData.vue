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
              <div class="metric-icon metric-icon-sentiment">
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
              <div class="metric-icon metric-icon-academic">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 class="metric-label">Academic Reception</h3>
            </div>
            <p class="metric-value metric-value-teal">{{ currentHistoricalRating }}</p>
            <p class="metric-description">Art historical consensus 2024</p>
          </div>
          <!-- Brand card-->
          <div class="metric-card">
            <div class="metric-header">
              <div class="metric-icon metric-icon-brand">
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
              <div class="metric-icon metric-icon-publications">
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
              Visualizations
            </button>
            <button
              @click="activeTab = 'exports'"
              :class="['tab-button', { active: activeTab === 'exports' }]"
            >
              Data & Analysis
            </button>
        </div>
        <div class="tab-content">
          <!-- Overview Tab -->
          <div v-if="activeTab === 'overview'" class="tab-panel">
            <OverviewTab
              :brandCollabs="brandCollabs"
              :commercialEvents="commercialEvents"
              :historicalData="historicalData"
            />
          </div>

          <!-- Tableau Tab -->
          <div v-if="activeTab === 'tableau'" class="tab-panel">
            <VisualizationsTab :tableau-url="tableauUrl"  height="900px"/>
          </div>
          <!-- Data tab-->
          <div v-if="activeTab === 'exports'" class="tab-panel">
            <DataTab />
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

import OverviewTab from '@/components/OverviewTab.vue';
import VisualizationsTab from '@/components/VisualizationsTab.vue';
import DataTab from '@/components/DataTab.vue';

export default {
  components: {
    OverviewTab,
    VisualizationsTab,
    DataTab
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
      tableauUrl: 'https://public.tableau.com/views/VanGoghinPopCulture/Dashboard1?:embed=y&:showVizHome=no&:toolbar=yes&:size=y&:device=desktop'
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
