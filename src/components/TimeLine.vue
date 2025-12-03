<template>
  <div class="time-line">
    <div
      v-for="(brand, index) in sorted"
      :key="brand.partner"
      class="time-line-item"
      :class="{ 'time-line-item-left': index % 2 === 1 }"
    >
      <!-- <div class="time-line-year">
        {{ brand.year }}
      </div> -->
      <!-- <div class="time-line-divider">
        <div class="time-line-dot"></div>
      </div> -->

      <div class="time-line-content">
        <h3>{{ brand.partner }}</h3>
        <p>{{ brand.description }}</p>
      </div>
      <div class="time-line-year">
        {{ brand.year }}
      </div>
    </div>
    <div class="time-line-vertical-line"></div>
    <div class="time-line-divider">
      <div class="time-line-dot"></div>
    </div>
  </div>
</template>

<script setup>
import { getBrandCollaborations } from "@/utils/artHistoricalData.js";

const sorted = getBrandCollaborations().sort((a, b) => a.year - b.year);
</script>

<style scoped>
.time-line {
  position: relative;
  /* display: flex;
  flex-direction: column; */
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
  background: var(--accent);
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
    padding: 1rem 0;
    margin-left: 15rem;
  }

  .time-line-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
}
  /* .time-line-item-right .time-line-content {
  order: -1;
  text-align: left;
  flex-direction: row-reverse;
} */
.time-line-item-left {
  flex-direction: row-reverse;
  text-align: right;
}
  .time-line-dot {
    margin: 0 auto 0.5rem auto;
  }
  .time-line-vertical-line {
  position: absolute;
  top: 0;
  left: 50%;
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

.timeline-divider {
  position: relative;
  width: 40px;
  display: flex;
  justify-content: center;
  z-index: 2;
}
.time-line-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #3b82f6;
  position: relative;
  z-index: 2;
  margin: 0 1rem;
  transform: translateX(-50%);
  top: 0;
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
  padding: 0.25rem 1rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
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
