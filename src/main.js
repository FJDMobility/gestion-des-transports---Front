import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// const dateApp = require("./utils/dateApp.js");
import {default as dateApp} from '@/utils/dateApp'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


console.log("environnement : " + process.env.NODE_ENV)
console.log("vue_app_date  : "  + process.env.vue_app_date)
console.log("dateApp : " + dateApp())
console.log("dateApp : " + dateApp())

// require('dotenv').config;
// process.env['vue_app_date'] = '2022-01-02'
console.log("vue_app_date 2 : "  + process.env.vue_app_date)