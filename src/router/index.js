import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/401',
      name: '401',
      component: () => import('@/pages/errorPage/401')
    },
    {
      path: '/userList',
      name: 'userList',
      component: () => import('@/pages/userList/userList')
    },
    {
      path: '/share',
      name: 'share',
      component: () => import('@/pages/share/Index')
    }
  ]
})
