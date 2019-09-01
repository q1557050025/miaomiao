import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import {api} from '@/api'
Vue.prototype.$api = api

import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

import betterScroll from "@/components/Scroll"
Vue.component("betterScroll", betterScroll)

import loading from "@/components/Loading"
Vue.component("loading", loading)

Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
