import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import './plugins/element.js'
// 全局css
import './global/global.scss'
// 阿里图标
Vue.config.productionTip = false


// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://wangyiapi.axian.fun'
axios.defaults.headers["content-type"] = "application/json"

axios.interceptors.request.use(config => {
const xtoken = 'Bearer: ' + window.sessionStorage.getItem('token')
  config.headers.Authorization = xtoken
  return config
})
// axios.interceptors.request.use(config => {
//   var xtoken = JSON.parse()//我的token 存储在 localStorage中
//   // console.log(xtoken) 如果 xtoken 存在 就设置请求头
//   if (xtoken) {

//     // console.log(xtoken)
//     config.headers['Authorization'] = window.sessionStorage.getItem('token')//配置请求头中  Authorization 字段的值为拿到的token
//   }
//   return config
// })

Vue.prototype.$axios = axios
Vue.use(VueCookies)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
