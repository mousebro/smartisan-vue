import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state= {
  count:3
}
const mutations={
  add(state){
    state.count++
  },
  reduce(state){
    state.count--
  }
}
const getters = {
  count:function(){
    return state.count+=100
  }
}

export default new Vuex.Store({
  state,mutations,getters,
  actions: {
    addAction(context){
      context.commit('add')
    }
  }
})
