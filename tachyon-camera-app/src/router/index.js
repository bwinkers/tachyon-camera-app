import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import { Auth } from 'aws-amplify'

import Home from '@/components/Home.vue'
import Album from '@/components/Album.vue'
import Albums from '@/components/Albums.vue'
import Camera from '@/components/Camera.vue'
import Support from '@/components/Support.vue'
import Profile from '@/components/Profile.vue'

import AuthComponent from '@/components/Auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/auth', 
    name: 'Auth', 
    component: AuthComponent 
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
    meta: { requiresAuth: true} 
  },
  {
    path: '/albums/:id',
    name: 'Album',
    component: Album,
    meta: { requiresAuth: true} 
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera,
    meta: { requiresAuth: true} 
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true} 
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  }

]

const router = new Router({
  routes
})

Vue.use(Router)

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser().then(() => {
      next()
    }).catch(() => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router