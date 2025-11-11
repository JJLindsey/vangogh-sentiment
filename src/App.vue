<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div>
        <h1 class="app-title"></h1>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
