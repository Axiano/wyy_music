import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		musicList: [],
	},
	mutations: {
		addMusic(state,musicList) {
			state.musicList = musicList
			console.log(state.musicList)
		}
	},
	actions: {},
	modules: {}
})
