import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
// 全局css
import './global/global.scss'
// 阿里图标
Vue.config.productionTip = false


axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers["content-type"] = "application/json"


Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
