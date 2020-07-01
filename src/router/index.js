import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/platos',
    name: 'Platos',
    component: () => import(/* webpackChunkName: "platos" */ '../views/Platos.vue')
  },
  {
    path: '/viandas',
    name: 'Viandas',
    component: () => import(/* webpackChunkName: "viandas" */ '../views/Viandas.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
