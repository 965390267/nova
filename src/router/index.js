import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
import nodeswiper from '@/view/nodeswiper'
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
      component: nodeswiper
    }
    ,
    {
      path: '/zhiya',
      name: 'zhiya',
      component: ()=>import('@/view/ziya')
    }
    ,
    {
      path: '/suhui',
      name: 'suhui',
      component: ()=>import('@/view/suhui')
    }
    ,
    {
      path: '/mynodedetail',
      name: 'mynodedetail',
      component: ()=>import('@/view/mynodedetail')
    }
    ,
  
    {
      path: '/rule',
      name: 'rule',
      component: ()=>import('@/view/rule')
    },
    {
      path: '/problem',
      name: 'problem',
      component: ()=>import('@/view/problem')
    }
  ]
})
