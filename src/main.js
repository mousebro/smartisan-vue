import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import axios from 'axios'

//import VueResource from "vue-resource"
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.use(Mint)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
// import "element-ui/lib/theme-chalk/index.css"
// import "element-ui/lib/index.js"

//创建vue的实例对象
Vue.filter("colorText",function(val){
  if(val == "red"){
    return "酒红色"
  }else if(val == "black"){
    return "墨黑色"
  }else if(val == "blue"){
    return "宝石蓝"
  }else if(val == "yellow"){
    return "香槟金"
  }else if(val == "green"){
    return "青绿色"
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
