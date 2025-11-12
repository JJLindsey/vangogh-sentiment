<template>
  <main>
    <h1 class="text-4xl font-bold mb-4">Van Gogh Sentiment Analysis</h1>
    <p class="text-lg mb-6">
      Exploring how public and historical sentiment toward Vincent van Gogh has evolved
      — from <em>Starry Night</em> to the immersive experiences of today.
    </p>

    <p class="text-sm mb-8">
      Data gathered from Reddit, Twitter hashtags (#VanGogh, #StarryNight),
      and museum commentary. Processed with free sentiment tools and visualized
      using Tableau and Vue.js.
    </p>

    <router-link
      to="/data"
      class="inline-block font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      View Collected Data
    </router-link>
  </main>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
