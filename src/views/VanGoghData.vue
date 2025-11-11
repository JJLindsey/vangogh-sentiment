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
import axios from 'axios'

export default {
  data() {
    return {
      comments: [],
      loading: true
    }
  },
  async mounted() {
    try {
      const query = 'van+gogh'
      const url = `https://api.pushshift.io/reddit/search/comment/?q=${query}&size=100`
      const res = await axios.get(url)

      this.comments = res.data.data.map(item => ({
        text: item.body,
        created_utc: new Date(item.created_utc * 1000),
        subreddit: item.subreddit
      }))
    } catch (err) {
      console.error(err)
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
