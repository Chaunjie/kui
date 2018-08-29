import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'test',
      component: r => require.ensure([], () => r(require('../docs/test.md')))
    },
    {
      path: '/start',
      name: 'start',
      component: r => require.ensure([], () => r(require('../docs/start.md')))
    },
    {
      path: '/change',
      name: 'change',
      component: r => require.ensure([], () => r(require('../docs/change.md')))
    },
    {
      path: '/base',
      name: 'base',
      component: r => require.ensure([], () => r(require('../docs/base.md')))
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: r => require.ensure([], () => r(require('../../packages/actionsheet/index.md')))
    },
    {
      path: '/layout',
      name: 'layout',
      component: r => require.ensure([], () => r(require('../../packages/col/index.md')))
    },
    {
      path: '/grid',
      name: 'grid',
      component: r => require.ensure([], () => r(require('../../packages/grid/index.md')))
    },
    {
      path: '/cell',
      name: 'cell',
      component: r => require.ensure([], () => r(require('../../packages/cell/index.md')))
    },
    {
      path: '/panel',
      name: 'panel',
      component: r => require.ensure([], () => r(require('../../packages/panel/index.md')))
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../../packages/button/index.md')))
    },
    {
      path: '/icon',
      name: 'icon',
      component: r => require.ensure([], () => r(require('../../packages/icon/index.md')))
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: r => require.ensure([], () => r(require('../../packages/loadmore/index.md')))
    },
    {
      path: '/loading',
      name: 'loading',
      component: r => require.ensure([], () => r(require('../../packages/loading/index.md')))
    },
    {
      path: '/tag',
      name: 'tag',
      component: r => require.ensure([], () => r(require('../../packages/tag/index.md')))
    }
  ]
})
