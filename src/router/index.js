import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header.vue'
import foot from '@/components/footer.vue'
import newTask from '@/components/newTask'
import time from '@/components/time'
import home from '@/components/home'

Vue.component ('header-app', header)
Vue.component ('foot-app', foot)


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path:'/home',
      name: 'home',
      component: home
    },
    {
      path: '/newTask',
      name:'newTask',
      component: newTask
    }
  ]
})
