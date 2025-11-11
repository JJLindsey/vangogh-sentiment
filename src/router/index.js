import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VanGoghData from '@/views/VanGoghData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'homeview', component: HomeView},
    {path: '/data',name: 'data', component:VanGoghData}
  ],
})

export default router
