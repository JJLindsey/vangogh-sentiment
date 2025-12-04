<template>
  <div class="sunflower-cluster">
    <div
      v-for="(item, index) in data"
      :key="item.event"
      class="bloom"
      :style="getBloomStyle(index)"
    >
    <div class="bloom-center">{{ item.year }}</div>
    <!--petals-->
    <img
      v-for="n in getPetalCount(item)"
      :key="n"
      :src="petal"
      class="petal"
      :style="getPetalStyle(item, n)"
    />
    </div>
  </div>
</template>

<script setup>
  import petal from '@/assets/images/sunflower-paint.svg';
  import {getHistoricalCommercialData} from '@/utils/artHistoricalData.js';

  const data = getHistoricalCommercialData()

  function getPetalCount(item) {
    if (item.impact === "Viral phenomenon") return 12;
    return 8;
  }
 function getPetalStyle(item, index) {
  const count = getPetalCount(item);
  const angle = (360 / count) * index;
  const scale = impactToScale(item.impact);

  return {
    transform: `
      rotate(${angle}deg)
      translate(80px)
      rotate(-${angle}deg)
      scale(${scale})
    `,
    transformOrigin: "50% 100%"
  };
}

  function impactToScale(impact) {
    const map = {
    'Medium': 0.8,
    'High': 0.9,
    'Very High': 1.0,
    'Extremely High': 1.1,
    'Viral phenomenon': 1.2
  }
  return map[impact] || 1
  }
  function getBloomStyle(index) {
    return {
      left: `${index * 220}px`,
    }
  }
</script>
<style scoped>
.sunflower-cluster {
  position: relative;
  padding: 40px;
  min-height: 300px;
}

.bloom {
  position: absolute;
  width: 200px;
  height: 200px;
}

.bloom-center {
  position: absolute;
  width: 60px;
  height: 60px;
  left: 70px;
  top: 70px;
  background: #3e3b2d;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.petal {
  position: absolute;
  width: 60px;
  height: auto;
  top: 70px;
  left: 70px;
}

</style>
