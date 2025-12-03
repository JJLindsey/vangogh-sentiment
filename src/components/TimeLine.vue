<template>
  <div>
    <h4>Time Line of Brand Collaborations with Van Gogh Museum</h4>
    <h6>Official museum partnerships and commercial events involving Van Gogh's art over the years - not exhaustive list.</h6>
  </div>
  <div class="time-line">
    <div
      v-for="(brand, index) in sorted"
      :key="brand.partner"
      class="time-line-item"
      :class="{ 'time-line-item-left': index % 2 === 1 }"
    >
      <div class="time-line-divider">
        <div class="time-line-dot" :style="{ backgroundColor: brand.color || defaultDotColor }"></div>
      </div>

      <div class="time-line-content" :style="{ backgroundColor: brand.color || defaultDotColor }">
        <h3>{{ brand.partner }}</h3>
        <p>{{ brand.description }}</p>
      </div>
      <div class="time-line-year">
        {{ brand.year }}
      </div>
    </div>
    <div class="time-line-vertical-line"></div>

  </div>
</template>

<script setup>
import { getBrandCollaborations } from "@/utils/artHistoricalData.js";

const sorted = getBrandCollaborations()
  .map((brand, i) => ({ ...brand, color: generateColor(i)}))
  .sort((a, b) => a.year - b.year);

  const defaultDotColor = '#3b82f6';

  function generateColor(index) {
    const palette =[
      '#598fff', // Blue
      '#10b981', // Green
      '#f5e00b', // Yellow
      '#ff9d9d', // Salmon
      '#b08dff', // Lilac
      '#ec4899', // Pink
      '#00e4cb', // Teal
      '#f97316'  // Orange
    ];
    return palette[index % palette.length] || defaultDotColor;
  }
</script>

<style scoped>
.time-line {
  position: relative;
  padding: 1rem;
}

/* vertical layout (mobile) */
.time-line-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.time-line-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 1rem;
  position: relative;
  top: 0;
}
.time-line-content h3 {
  margin: 0;
}

/* desktop horizontal timeline */
@media (min-width: 900px) {
  .time-line {
    /* display: flex;
    overflow-x: auto; */
    padding: 2rem 3rem;
    /* margin-left: 15rem; */
  }

  .time-line-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
}
.time-line-item-left {
  flex-direction: row-reverse;
  text-align: right;
}
  .time-line-vertical-line {
  position: absolute;
  top: 0;
  left: 51.5%;
  width: 2px;
  height: 100%;
  background: #ededed;
  transform: translateX(-50%);
  z-index: 1;
}
  .time-line-opposite {
  font-weight: 600;
  text-align: right;
  padding-top: 0.5rem;
  }
.time-line-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  z-index: 2;
  margin: 0 1rem;
  transform: translateX(-50%);
}
  .time-line-line {
  width: 2px;
  flex: 1;
  background: #8f1515;
  margin-top: 4px;
  border-radius: 2px;
}

.time-line-content {
  max-width: 300px;
  padding: 0.5rem 1rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 3;
}

.time-line-content h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.time-line-content p {
  margin: 0;
  opacity: 0.85;
  line-height: 1.4;
}
.time-line-year {
  width: 100px;
  font-weight: 600;
  padding: 1rem;
}
}
</style>
