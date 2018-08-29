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
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../docs/button.md')))
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
    }
  ]
})
