import { createRouter, createWebHistory } from 'vue-router'
import HomeV from './views/Home.vue'
import Login from './views/Login.vue'
import SignupV from './views/SignupV.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import store from './store'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeV
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/signup',
      name: 'signupV',
      component: SignupV,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost,
      meta: { requiredLogin: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  // next()
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
