import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pu from '../views/Pu.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pu',
    name: 'Pu',
    component: Pu
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
