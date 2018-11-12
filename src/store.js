import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state= {
  islogin:false,
  userName:"",
  avator:"",
  uid:null,
  shoppingCartCount:0
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
