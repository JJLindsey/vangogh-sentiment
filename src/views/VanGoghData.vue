<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Van Gogh Public Sentiment</h1>

    <div v-if="loading">Loading comments...</div>

    <div v-else>
      <div v-for="(item, index) in comments" :key="index" class="mb-4 p-3 rounded border">
        <p class="text-gray-800 italic">“{{ item.text }}”</p>
        <p class="text-sm text-gray-500">
          Source: {{ item.source }} · {{ new Date(item.date).toLocaleDateString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VanGoghData',
  data() {
    return {
      comments: [],
      loading: true
    }
  },
  async mounted() {
    try {
      const res = await fetch('/data/vangogh_comments.json')
      this.comments = await res.json()
    } catch (err) {
      console.error('Error loading JSON:', err)
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
body {
  font-family: system-ui, sans-serif;
}
</style>
