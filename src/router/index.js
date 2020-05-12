import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    redirect: 'Home',
    children: [
      {
        path: 'Home',
        component: () => import('@/views/Home'),
        name: 'Home',
      },
    ],
  },
  {
    path: '/About',
    component: Layout,
    redirect: '/About',
    children: [
      {
        path: '',
        component: () => import('@/views/About'),
        name: 'About',
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// 全局钩子
router.beforeEach((to, from, next) => {
  if (store.state.login) {
    next()
  } else {
    next(false)
  }

  // to and from are both route objects. must call `next`.
})
// router.beforeResolve((to, from, next) => {
//   console.log('beforeResolve', to, from, next)
//   // to and from are both route objects. must call `next`.
// })
export default router
