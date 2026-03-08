import { createRouter, createWebHistory } from 'vue-router'
// 假設你的頁面元件放在 src/views 目錄下
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Experience from '../views/Experience.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

// 建立 router 實體，使用 HTML5 History 模式
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }

    return { top: 0, behavior: 'smooth' }
  }
})

export default router