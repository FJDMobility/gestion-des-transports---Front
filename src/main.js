import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'
import serviceCovoiturageApi from './services/serviceCovoiturageApi'
import {default as dateApp} from '@/utils/dateApp'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store( {
  state : {
    monState : "State Store 01",
    userId: "",
    listecovoiturage : null
   
  },
  getters: {
    allCovoiturage: state => {
      return state.listecovoiturage
    },
    // addListeClient : state => client => {
    //   state.listeclient.push(client)
    // },
    getAllCovoiturageUserId: (state) => (userId) => {
      serviceCovoiturageApi.getAll(userId).then( 
        (response) => {
          state.listecovoiturage = response.data
          console.log("retour service liste covoiturage : ",state.listecovoiturage)
        }
      )
    }
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')


console.log("environnement : " + process.env.NODE_ENV)
console.log("VUE_APP_DATE  : "  + process.env.VUE_APP_DATE)
// console.log("vue_app_date  : "  + process.env.vue_app_date)
console.log("dateApp : " + dateApp())
// process.env['VUE_APP_DATE'] = '2022-01-02'
console.log("dateApp : " + dateApp())

console.log("VUE_APP_DATE 2 : "  + process.env.VUE_APP_DATE)