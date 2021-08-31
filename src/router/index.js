import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pu from '../views/Pu.vue'
import Da from '../views/Da.vue'

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
  {
    path: '/da',
    name: 'Da',
    component: Da
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
