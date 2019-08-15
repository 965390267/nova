import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
// import nodeswiper from '@/view/nodeswiper'
Vue.use(Router)

 const router= new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:()=>import('@/view/index'),
      meta:{
        title:'Nova 质变'
      }
    },
    {
      path: '/nodeswiper',
      name: 'nodeswiper',
      component:()=>import('@/view/nodeswiper'),
      meta:{
        title:'Nova 质变'
      }
    }
    ,
    {
      path: '/zhiya',
      name: 'zhiya',
      component:()=>import('@/view/ziya'),
      meta:{
        title:'Nova 质变'
      }
    }
    ,
    {
      path: '/suhui',
      name: 'suhui',
      component:()=>import('@/view/suhui'),
      meta:{
        title:'Nova 质变'
      }
    }
    ,
    {
      path: '/mynodedetail',
      name: 'mynodedetail',
      component:()=>import('@/view/mynodedetail'),
      meta:{
        title:'Nova 质变'
      }
    }
    ,
    {
      path: '/rule',
      name: 'rule',
      component:()=>import('@/view/rule'),
      meta:{
        title:'Nova 质变'
      }
    },
    {
      path: '/problem',
      name: 'problem',
      component:()=>import('@/view/problem'),
      meta:{
        title:'Nova 质变'
      }
    },
    {
      path: '/moneyrecord',
      name: 'moneyrecord',
      component:()=>import('@/view/moneyrecord'),
      meta:{
        title:'Nova 质变'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});

export default router