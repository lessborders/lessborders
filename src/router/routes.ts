import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/home.vue') }],
  },
  {
    path: '/shop',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/shop.vue') }],
  },
  {
    path: '/play',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/play.vue') }],
  },
  {
    path: '/search',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/search.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/errors/404.vue'),
  },
]

export default routes
