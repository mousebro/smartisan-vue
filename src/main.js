import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
//import VueResource from "vue-resource"
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.use(Mint)
Vue.config.productionTip = false

// import "element-ui/lib/theme-chalk/index.css"
// import "element-ui/lib/index.js"

//创建vue的实例对象

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
