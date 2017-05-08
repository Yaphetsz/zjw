import Vue from 'vue'

import Router from 'vue-router'

import Index from '@/scripts/components/Index'

import Board from '@/scripts/components/Board'

import List from '@/scripts/components/List'

import Kind1 from '@/scripts/components/Kind1'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: 'board',
      children: [
        {
          path: '',
          component: Board
        },
        {
          path: 'board',
          component: Board
        },
        {
          path: 'list',
          component: List
        }
      ]
    },
    {
      path: '/kind1/:type',
      component: Kind1
    }
  ]
})
