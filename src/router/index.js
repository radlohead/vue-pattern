import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/model/App'
import Slot1 from '@/components/slot/TabContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/slot',
      name: 'Slot1',
      component: Slot1
    }
  ]
})
