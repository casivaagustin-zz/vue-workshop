import Vue from 'vue'
import App from './App.vue'

//Adds boostrap components
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false;
Vue.axios.defaults.baseURL = 'https://api.github.com/';

new Vue({
  el: '#app',
  render: h => h(App)
})
