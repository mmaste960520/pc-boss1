import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about')
  },
  {
    path: '/price',
    name: 'price',
    component: () => import('../views/price')
  },
  {
    path: '/business-license',
    name: 'business-license',
    component: () => import('../views/credential/business-license')
  },
  {
    path: '/telecom',
    name: 'telecom',
    component: () => import('../views/credential/telecom')
  },
  {
    path: '/user-agreement',
    name: 'user-agreement',
    component: () => import('../views/user-agreement')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/contact-us')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
