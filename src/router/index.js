import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue'), meta: {title: '首页'} },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue'), meta: { title: '关于我' }},
]

const router = new VueRouter({
  routes
})

export default router
