import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Store from '@/components/pages/Store'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/item-detail',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/checkout',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
