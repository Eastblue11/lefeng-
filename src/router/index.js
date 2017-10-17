import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '@/pages/Home'
import Moda from '@/pages/Moda'
import Quangou from '@/pages/Quangou'
import Mami from '@/pages/Mami'
import Youli from '@/pages/Youli'
import Huiyuan from '@/pages/Huiyuan'
import Cart from '@/pages/Cart'
import jingxuan_detial from '@/pages/Jingxuan_detial'
import  Sousuo from "@/pages/Sousuo"
// 登录页面
import Admin from '@/pages/admin'

// Moda详情页
import Modadetial from '@/pages/Modadetial'

import zhifu from '@/pages/zhifu'
import jiesuan from '@/pages/jiesuan'

import Data from '@/pages/data'
import Data2 from '@/pages/data-2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/moda',
      name: 'Moda',
      component: Moda
    },
    {
      path: '/quangou',
      name: 'Quangou',
      component: Quangou
    },
    {
      path: '/mami',
      name: 'Mami',
      component: Mami
    },
    {
      path: '/youli',
      name: 'Youli',
      component: Youli
    },
     {
      path: '/huiyuan',
      name: 'Huiyuan',
      component: Huiyuan
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/jingxuan_detial/:item',
      name: 'Jingxuan_detial',
      component: jingxuan_detial
    },
    {
      path: '/Modadetial',
      component: Modadetial
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
    {
      path: '/data2',
      name: 'Data2',
      component: Data2
    },
    {
      path: '/sousuo',
      name: 'Sousuo',
      component: Sousuo
    },
     {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/jiesuan',
     
      component:jiesuan
    },
    {
      path: '/zhifu',
     
      component:zhifu
    }
  ]
})
