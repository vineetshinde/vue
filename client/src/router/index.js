import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import amc from '@/components/amc'
import layout_component from '@/components/layout_component'
import dashboard from '@/components/dashboard'
// import DashCards from '@/components/DashCards'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/amc',
      name: 'amc',
      component: amc
    },
    {
      path: '/layout_component',
      name: 'layout_component',
      component: layout_component
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
