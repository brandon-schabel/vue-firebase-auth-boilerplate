import Vue from "vue"
import Vuex from "vuex"
import { auth } from "../firebase"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    setUser: state => {
      state.user = auth.currentUser
    }
  },
  actions: {
    setUser: context => {
      context.commit("setUser")
    }
  }
})
