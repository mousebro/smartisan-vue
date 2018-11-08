import Vue from 'vue'
import Router from 'vue-router'
import home from './page/home'
import phoneList from "./page/phone/phonelist.vue"
import phoneDetail from "./page/phone/phoneDtail.vue"
import Login from "./components/login.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:"主页",
      path: '/',
      component: home
    },
    {
      name:"页面首页",
      path: '/home',
      component: home
    },
    {
      name:"手机列表页",
      path:'/phoneList',
      component:phoneList
    },
    {
      name:"手机详情页",
      path:'/phoneList/detail',
      component:phoneDetail
    },
    {
      name:"登录页",
      path:"/login",
      component:Login

    }
  ]
})
