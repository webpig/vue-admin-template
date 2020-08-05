import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../pages/user')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../pages/index')
    },
  ]
})