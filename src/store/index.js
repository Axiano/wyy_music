import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		musicList: [],
		songIdList: []
	},
	mutations: {
		addMusic(state,musicList) {
			state.musicList = musicList
			console.log(state.musicList)
		},
		addSongIdLiat(state, songId){
			state.songIdList.push(songId)
		}
	},
	actions: {},
	modules: {}
})
