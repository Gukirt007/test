import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'table',
    component: () => import(/* webpackChunkName: "table" */ '../views/TableView.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/CardView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
