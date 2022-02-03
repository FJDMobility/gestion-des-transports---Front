import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'
import {store} from './store'
import { default as dateApp } from '@/utils/dateApp'

// POUR TEST SANS CONNEXION DB :
// import loadTestData from "./testData/loadTestData.js"
// loadTestData

Vue.use(Vuex)

Vue.config.productionTip = false

store.getters.getAllCovoiturageUserId

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// test variables environnement :
console.log("environnement : " + process.env.NODE_ENV)
console.log("VUE_APP_DATE  : " + process.env.VUE_APP_DATE)
console.log("dateApp : " + dateApp())