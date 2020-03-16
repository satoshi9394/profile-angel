import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      dataPlatziProfile:[],
      dataMovie:[]    
  },
  mutations: {
    setDataPlatzi(state, data) {
      state.dataPlatziProfile = data
    },
    setDataMovie(state, data) {
      state.dataMovie = data.results
    }
  },
  actions: {
    getDataPlatzi ({commit}) {
      console.log('entre a funcion')
      const url='https://platzi-scrap.herokuapp.com/scrap/angel-santillan-brambila'
      fetch(url)
        .then( res => res.json())
        .then( data => {
          console.log('entre a respuesta')
          commit('setDataPlatzi', data) 
        })  
    },
    getMovie ({commit}, url) {
      console.log('entre a funcion movie')
      fetch(url)
        .then( res => res.json())
        .then( data => {
          const movie = data
          commit('setDataMovie', movie)
        })
    }
  },
  modules: {
  }
})
