import Vue from 'vue'
import App from './App.vue'
//引入路由并全局注册
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router,
  store

}).$mount('#app')
