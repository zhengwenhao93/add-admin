import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const publicRoutes = [{
  path: '/',
  name: 'login',
  component: () => import('@/views/login')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
