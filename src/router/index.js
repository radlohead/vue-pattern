import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/model/App'
import Slot1 from '@/components/slot1/TabContainer'
import Slot2 from '@/components/slot2/TabContainer'
import Slot3 from '@/components/slot3/App'
import Slot4_1 from '@/components/slot4/Button'
import Slot4_2 from '@/components/slot4/IconButton'

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
    },
    {
      path: '/slot3',
      name: 'Slot3',
      component: Slot3
    },
    {
      path: '/slot4_1',
      name: 'Slot4_1',
      component: Slot4_1
    },
    {
      path: '/slot4_2',
      name: 'Slot4_2',
      component: Slot4_2
    }
  ]
})
