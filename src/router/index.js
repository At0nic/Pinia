import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Quiz from '../pages/Quiz.vue'
import ResultPage from '../pages/ResultPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quiz/:category', component: Quiz },
  { path: '/result', component: ResultPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
