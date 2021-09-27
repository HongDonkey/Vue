import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding/DataBindingList2.vue'
import nested from '../views/NestedComponent.vue'
import KakaoLogin from '../views/KakaoLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },

  { 
    path: '/nested',
    name: 'nested',
    component: nested
  },
  { 
    path: '/KakaoLogin',
    name: 'KakaoLogin',
    component: KakaoLogin
  },
  { 
    path: '/NaverLogin',
    name: 'NaverLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/NaverLogin.vue')
  },
  { 
    path: '/GoogleLogin',
    name: 'GoogleLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/GoogleLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
