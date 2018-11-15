import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state= {
  islogin:false,
  userName:"",
  avator:"",
  uid:null,
  shoppingCartCount:0,
  cartPlist:[],
  productDetail:[],
  pid:null,
}
const mutations={
  login:function(state,res){
    state.islogin = true;
    state.userName = res.uname;
    state.avator = res.avator;
    state.uid = res.uid
  },
  changeCartCount:function(state,count){
    state.shoppingCartCount=count
  },
  changeuid:function(state,uid){
    state.uid=uid
  },
  cartplist:function(state,list){
     state.cartplist = list
  },
  productDetail:function(state,detail){
    state.productDetail = detail
  },
  changepid:function(state,pid){
    state.pid = pid
  }
}
const getters = {

}

export default new Vuex.Store({
  state,mutations,getters,
  actions: {
    addAction(context){
      context.commit('add')
    }
  }
})
