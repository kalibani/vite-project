import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/containers/pages/Home/index.vue'),
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/about/',
    component: () => import('@/containers/pages/About/index.vue'),
    meta: {
      title: 'About',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'text-gray-900 font-bold',
  routes,
})

export default router
