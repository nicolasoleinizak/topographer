import { createRouter, createWebHistory } from 'vue-router'
import MapCreatorView from '../views/MapCreatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MapCreatorView
    }
  ]
})

export default router
