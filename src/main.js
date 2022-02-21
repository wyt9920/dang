import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  './assets/global.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

axios.defaults.baseURL="http://127.0.0.1:8181";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

