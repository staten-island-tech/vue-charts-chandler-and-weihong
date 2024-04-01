import { createRouter, createWebHistory } from 'vue-router'
import ChandlerGraph from '../views/ChandlerGraph.vue'
import Pageload from '@/views/Pageload.vue'
import WeihongGraph from '@/views/WeihongGraph.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pageload',
      component: Pageload
    },
    {
      path: '/Graph1',
      name: 'graph2',
      component: WeihongGraph
    },
    {
      path: '/Graph2',
      name: 'about',
      component: ChandlerGraph
    }
  ]
})

export default router
