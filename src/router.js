import Vue from 'vue'
import Router from 'vue-router'
import home from './page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:"主页",
      path: '/',
      component: home
    },
  ]
})
