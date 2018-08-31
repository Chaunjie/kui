import Vue from 'vue'
import Router from 'vue-router'
import componentList from '../componentList.js'

Vue.use(Router)

const router = () => {
  let routes = [
    {
      path: '/', 
      redirect: 'start'
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
      path: '/wepy/start',
      name: 'wepystart',
      component: r => require.ensure([], () => r(require('../docs/introduce.md')))
    },
    {
      path: '/change',
      name: 'change',
      component: r => require.ensure([], () => r(require('../docs/change.md')))
    },
    {
      path: '/wepy/base',
      name: 'wepybase',
      component: r => require.ensure([], () => r(require('../docs/base.md')))
    }]

  const routerArr = componentList.list.map((name) => {
    let aName = name
    let bName = name
    if (name === 'layout') {
      aName = 'col'
    }
    const component = r => require.ensure([], () => r(require(`../../packages/${aName}/index.md`)))
    return {
      path: `/${bName}`,
      name: `${bName}`,
      component
    }
  })
  const routerWepy = componentList.list.map((name) => {
    const component = r => require.ensure([], () => r(require(`../wepydocs/docs/${name}.md`)))
    return {
      path: `/wepy/${name}`,
      name: `wepy${name}`,
      component
    }
  })
  const newArr = [...routes, ...routerArr, ...routerWepy]
  return newArr
}

export default  new Router({
  routes: router()
})
