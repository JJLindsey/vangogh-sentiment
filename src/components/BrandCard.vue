<template>
  <div class="brand-card">
    <img
      v-if="props.logoFile"
      class="brand-card__logo"
      :src="logoUrl"
      :alt="partner + ' logo'"
    />
    <h3 class="brand-card__name">{{ partner }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  partner: { type: String, required: true },
  logoFile: { type: String, required: false }
});

const logoUrl = props.logoFile ? `/logos/${props.logoFile}` : '';
</script>

<style scoped>
.brand-card {
  border-radius: 12px;
  padding: 1rem;
  background: var(--card-bg);
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.brand-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.brand-card__logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
.brand-card__name {
  margin-top: 0.5rem;
  font-size: 1rem;
}
</style>
