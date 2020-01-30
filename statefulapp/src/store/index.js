import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Jingle rattle snake',
    links: ['http://vuejs.org', 'http://playsnake.org', 'http://google.com']
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    }
  },
  actions: { //the commit in the curly brackets below gets the action
    removeLink: ({ commit }, link) => {
      commit('REMOVE_LINK', link)
    }
  },
  modules: {
  }
})
