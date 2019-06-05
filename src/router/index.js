import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/model/App'
import Slot1 from '@/components/slot1/TabContainer'
import Slot2 from '@/components/slot2/TabContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/slot1',
      name: 'Slot1',
      component: Slot1
    },
    {
      path: '/slot2',
      name: 'Slot2',
      component: Slot2
    }
  ]
})
