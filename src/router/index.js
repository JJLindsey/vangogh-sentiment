import { createRouter, createWebHistory } from 'vue-router'
import VanGoghData from '@/views/VanGoghData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/data', name: 'data', component: VanGoghData},
    {path: '/', name: 'homeview', component: VanGoghData},
  ],
})

export default router
