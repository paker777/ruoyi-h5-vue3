import { createRouter, createWebHistory } from 'vue-router'

import userRoutes from './modules/user'
import workRoutes from './modules/work'

export const layoutRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('@/views/Work/index.vue'),
    meta: {
      title: '工作台'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User/index.vue'),
    meta: {
      title: '我的'
    }
  }
]

// meta.keepAlive=true时，页面会缓存
// 页面name要与路由name一致，否则缓存会失效
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/layout/index.vue'),
      children: layoutRoutes
    },
    ...workRoutes,
    ...userRoutes,
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
