import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from "./axios.js"
import VueSwal from 'vue-swal'
import VeeValidate from 'vee-validate';
import BlockUI from 'vue-blockui'
Vue.use(BlockUI)
Vue.use(VeeValidate);
Vue.use(VueSwal)
Vue.prototype.$http = axios;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
