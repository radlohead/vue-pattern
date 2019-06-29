import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/model/App'
import Slot1 from '@/components/slot1/TabContainer'
import Slot2 from '@/components/slot2/TabContainer'
import Slot3 from '@/components/slot3/App'
import Slot4_1 from '@/components/slot4/Button'
import Slot4_2 from '@/components/slot4/IconButton'
import NextTick from '@/components/nextTick/App.vue'
import Mixin from '@/components/mixin/App.vue'
import Mixin2 from '@/components/mixin2/App.vue'
import Computed from '@/components/computed/App.vue'
import Watch from '@/components/watch/App.vue'
import Trinomial from '@/components/trinomial/App.vue'
import IfAndShow from '@/components/ifAndShow/App.vue'
import Click from '@/components/click/App.vue'
import Destroyed from '@/components/destroyed/App.vue'

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
    },
    {
      path: '/nextTick',
      name: 'NextTick',
      component: NextTick
    },
    {
      path: '/mixin',
      name: 'Mixin',
      component: Mixin
    },
    {
      path: '/mixin2',
      name: 'Mixin2',
      component: Mixin2
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/trinomial',
      name: 'Trinomial',
      component: Trinomial
    },
    {
      path: '/ifAndShow',
      name: 'IfAndShow',
      component: IfAndShow
    },
    {
      path: '/click',
      name: 'Click',
      component: Click
    },
    {
      path: '/destroyed',
      name: 'Destroyed',
      component: Destroyed
    }
  ]
})
