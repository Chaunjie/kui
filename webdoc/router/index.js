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
    }]

  const modules = componentList.list
  const routerArr = modules.map((name) => {
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
  const newArr = [...routes, ...routerArr]
  return newArr
}

export default  new Router({
  routes: router()
})
