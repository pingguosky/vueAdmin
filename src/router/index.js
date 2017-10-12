import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

import usermana from '@/views/usermana/usermana'
import admana from '@/views/admana/admana'
import testmana from '@/views/testmana/testmana'
import Login from '@/views/login/login'

import {fetch} from '@/utils/local'

Vue.use(Router)

const constantRouterMap = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      name: '首页'
    },
    {
      path: '/usermana',
      component: Layout,
      name: '用户管理',
      children: [
        {path: 'index', component: usermana}
      ]
    },
    {
      path: '/admana',
      component: Layout,
      name: '广告配置',
      children: [
        {path: 'index', component: admana}
      ]
    },
    {
      path: '/testmana',
      component: Layout,
      name: '测试机管理',
      children: [
        {path: 'index', component: testmana}
      ]
    },
    {
      path: '/login',
      component: Login,
      name: '登录'
    }
  ]
})

// 只要父路由或子路由设置了登陆即可登陆
constantRouterMap.beforeEach((to, from, next) => {
  if (to.name === '登录') {
    next()
  } else {
    let info = fetch('userName')
    if (info) {
      next()
    } else {
      constantRouterMap.push({
        path: '/login'
      })
    }
  }
})

export default constantRouterMap
