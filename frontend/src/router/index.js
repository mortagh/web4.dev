import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Accueil',
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Se connecter',
      }
    },
    {
      path: '/creation',
      name: 'creation',
      component: () => import('../views/CreationView.vue'),
      meta: {
        title: 'Créer un meme',
      }
    }
  ]
})

export default router
