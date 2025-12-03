<template>
  <div class="logo-grid">
    <div
      v-for="brand in brands"
      :key="brand.partner"
      class="logo-grid__card"
    >
      <BrandCard :partner="brand.partner" :logoFile="brand.logoFile" />

      <div class="logo-grid__info">
        <p><strong>Category:</strong> {{ brand.category }}</p>
        <p><strong>Year:</strong> {{ brand.year }}</p>
        <p class="logo-grid__description">{{ brand.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getBrandCollaborations } from '@/utils/artHistoricalData.js';
import BrandCard from "@/components/BrandCard.vue";

const brands = getBrandCollaborations();
</script>

<style scoped>
.logo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.logo-grid__card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: var(--shadow-md);
  transition: box-shadow 0.25s ease;
}
.logo-grid__card:hover {
  box-shadow: var(--shadow-md);
}
.logo-grid__info {
  margin-top: 1rem;
}
.logo-grid__description {
  margin-top: 0.5rem;
  opacity: 0.85;
}
</style>
