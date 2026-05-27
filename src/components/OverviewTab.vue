<!-- Overview Tab -->
<template>
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
      <!-- Historical Reception-->
       <HistoricalReceptionChart :historicalData="historicalData"/>
      <!-- Brand Collaborations Analysis -->
            <div class="p-6 bg-white rounded-lg shadow">
              <h2 class="text-2xl font-semibold mb-4">Commercialization & Popular Culture Impact</h2>
              <BrandCollaborationChart
                :brandCollabs="brandCollabs"
                :commercialEvents="commercialEvents"
              />
            </div>
      <!--Time Line-->
      <div class="content-card">
        <Timeline />
      </div>
        <!-- Brand Logos-->
        <div class="content-card">
        <LogoGrid />
        </div>
      <div class="card-title">
          <h3>Commercial Data</h3>
      </div>
        <div class="content-card">
        <SunflowerCluster />
        </div>
    </section>
</template>
<script>
  import Timeline from '@/components/TimeLine.vue'
  import LogoGrid from '@/components/LogoGrid.vue'
  import SunflowerCluster from '@/components/SunflowerCluster.vue'
  import BrandCollaborationChart from './charts/BrandCollaborationChart.vue';
  import HistoricalReceptionChart from './charts/HistoricalReceptionChart.vue';

  export default {
    components: { Timeline, LogoGrid, SunflowerCluster, BrandCollaborationChart, HistoricalReceptionChart },
    props: {
      brandCollabs: { type: Array, default: () => [] },
      commercialEvents: { type: Array, default: () => [] },
      historicalData: { type: Array, default: () => [], required: true }
    }
  }
</script>
