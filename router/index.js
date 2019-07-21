import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/views/table.vue'
import Calendar from '@/views/Calendar.vue'
Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})

