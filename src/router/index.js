import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('@/view/index')
    },
    {
      path: '/nodeswiper',
      name: 'nodeswiper',
      component: ()=>import('@/view/nodeswiper')
    }
    ,
    {
      path: '/ziya',
      name: 'ziya',
      component: ()=>import('@/view/ziya')
    }
    ,
    {
      path: '/suhui',
      name: 'suhui',
      component: ()=>import('@/view/suhui')
    }
  ]
})
