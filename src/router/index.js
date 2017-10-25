import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

import usermana from '@/views/usermana/usermana'
import ae from '@/views/admana/ae'
import af from '@/views/admana/af'
import testmana from '@/views/testmana/testmana'
// import Login from '@/views/login/login'

import {fetch} from '@/utils/local'

Vue.use(Router)

const constantRouterMap = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      name: '首页',
      hidden: true
    },
    {
      path: '/usermana',
      component: Layout,
      icon: 'el-icon-star-on',
      noDropdown: true,
      children: [
        {path: 'index', name: '用户管理', component: usermana}
      ]
    },
    {
      path: '/admana',
      component: Layout,
      name: '广告配置',
      icon: 'el-icon-picture',
      children: [
        {path: 'ae', name: '阿联酋', component: ae},
        {path: 'af', name: '阿富汗', component: af}
      ]
    },
    {
      path: '/testmana',
      component: Layout,
      icon: 'el-icon-plus',
      noDropdown: true,
      children: [
        {path: 'index', name: '测试机管理', component: testmana}
      ]
    },
    // {
    //   path: '/login',
    //   component: Login,
    //   name: '登录'
    // },
    { path: '*', redirect: '/404', hidden: true }
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
