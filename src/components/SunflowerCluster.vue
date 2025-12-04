<template>
  <div class="sunflower-cluster">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="bloom"
      :style="getBloomStyle(index)"
      @click="onBloomClick(item)"
    >
    <div class="tooltip">{{ item.type }} — {{ item.reach }}</div>
    <div class="bloom-label">
      {{ item.event }}
    </div>
    <div class="bloom-center">{{ item.year }}</div>
    <!--petals-->
    <img
     v-for="(p, pIndex) in Array.from({ length: getPetalCount(item)})"
        :key="pIndex"
        class="petal"
        :src="petal"
        :style="getPetalStyle(item, pIndex)"
        @click.stop
    />
     <div v-if="selectedBloom" class="info-panel">
      <h2>{{ selectedBloom.event }}</h2>
      <p><strong>Type:</strong> {{ selectedBloom.type }}</p>
      <p><strong>Impact:</strong> {{ selectedBloom.impact }}</p>
      <p><strong>Reach:</strong> {{ selectedBloom.reach }}</p>
    </div>
    </div>
  </div>
</template>

<script setup>
  import petal from '@/assets/images/sunflower-paint.svg';
  import {getHistoricalCommercialData} from '@/utils/artHistoricalData.js';
  import { ref } from 'vue';

  const data = getHistoricalCommercialData()
  const selectedBloom = ref(null);

  function getPetalCount(item) {
    const map = {
    "Medium": 10,
    "High": 14,
    "Very High": 18,
    "Extremely High": 22,
    "Viral phenomenon": 30
    }
    return map[item.impact] || 10;
  }
 function getPetalStyle(item, index) {
  const count = getPetalCount(item);
  const angle = (360 / count) * index;
  const radius = 50;

  return {
    transform: `rotate(${angle}deg) translate(0, -${radius}px)`,
  };
}

  function getBloomStyle(index) {
    return {}
  }
  function onBloomClick(item) {
    selectedBloom.value = item;
  }
</script>

<style scoped>
.sunflower-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 40px 0;
}

.bloom {
  width: 200px;
  height: 200px;
  cursor: pointer;
  transform: translate(-50%, -50%);
  padding-bottom: 10px;
}

.bloom-center {
  position: absolute;
  width: 65px;
  height: 65px;
  left: 50%;
  top: 50%;
  background: #3e3b2d;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  /* transform: translate(-50%, -50%); */
}
.bloom-label {
  position: absolute;
  width: 100%;
  left: 59%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: 600;
  font-size: 14px;
}

.petal {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transition: transform 0.2s ease;
}
.bloom:hover .petal {
  transform: scale(1.05);
}

/* Tooltip */
.tooltip {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(40, 40, 40);
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.bloom:hover .tooltip {
  opacity: 1;
}
</style>
