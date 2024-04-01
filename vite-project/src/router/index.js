import { createRouter, createWebHistory } from 'vue-router'
import about from '../views/AboutView.vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChandlerGraph.vue')
    }
  ]
})

export default router
