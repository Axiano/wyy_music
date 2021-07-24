import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Playlist from '../views/playlist.vue'
import PopularList from '../views/popularList.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'popularList',
		component: PopularList
	},
	{
		path: '/playlist',
		name: 'playlist',
		component: Playlist
	}
]

const router = new VueRouter({
	routes
})

export default router
