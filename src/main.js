import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import dateApp from './utils/dateApp'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


console.log("environnement : " + process.env.NODE_ENV)
console.log("VUE_APP_DATE  : "  + process.env.VUE_APP_DATE)
console.log("dateApp : " + dateApp())