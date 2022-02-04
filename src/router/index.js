import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login-1',
    component: Login
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Home
  }
]
const router = new VueRouter({
  routes
})

export default router
