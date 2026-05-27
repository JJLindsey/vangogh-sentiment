<template>
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
        :height="height"
        frameborder="0"
        allowfullscreen
        scrolling="no"
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
</template>
<script>
  export default {
    props: {
      tableauUrl: { type: String, default: '' },
      height: { type: Number, default: 900 }
    }
  }
</script>
