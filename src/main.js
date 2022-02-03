import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'
import serviceCovoiturageApiProd from './services/serviceCovoiturageApiProd'
import { default as dateApp } from '@/utils/dateApp'

Vue.use(Vuex)

Vue.config.productionTip = false

// init repo de dev :
// const allcovoiturageuser = 
// {
// "covoiturages":
/*
const allcovoiturageuser = require("../testData/testDonneesBase.json");


localStorage.removeItem("covoiturageRepo")
localStorage.setItem("covoiturageRepo", JSON.stringify(allcovoiturageuser));
// localStorage.setItem("covoiturageRepo", allcovoiturageuser);

*/

const store = new Vuex.Store({
  state: {
    monState: "State Store 01",
    user: { "id": 1, "nom": "Mourier", "prenom": "Denis" },
    listecovoiturage: null

  },
  getters: {
    allCovoiturage: state => {
      return state.listecovoiturage;
    },
    // addListeClient : state => client => {
    //   state.listeclient.push(client)
    // },
    getAllCovoiturageUserId: (state) => {
      // state.listecovoiturage = JSON.parse(serviceCovoiturageApi.getAll(state.user.id));
      // state.listecovoiturage = serviceCovoiturageApi.getAll(state.user.id);
      serviceCovoiturageApiProd.getAll(state.user.id).then(
        (response) => {
          state.listecovoiturage = response.data
          console.log("response.data : ", response.data);
        }
      )   ;
      console.log("retour service liste covoiturage : ", state.listecovoiturage);



      // serviceCovoiturageApi.getAll(state.user.id).then( 
      //   (response) => {
      //     state.listecovoiturage = response.data
      //     console.log("retour service liste covoiturage : ",state.listecovoiturage)
      //   }
      // )
    },
    // getUser: (state) => {
    //   serviceUserApi.getUserByName(username) {
    //     ser
    //   }
    // }


  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')



console.log("environnement : " + process.env.NODE_ENV)
console.log("VUE_APP_DATE  : " + process.env.VUE_APP_DATE)
// console.log("vue_app_date  : "  + process.env.vue_app_date)
console.log("dateApp : " + dateApp())
// process.env['VUE_APP_DATE'] = '2022-01-02'
// console.log("dateApp : " + dateApp())

// console.log("VUE_APP_DATE 2 : " + process.env.VUE_APP_DATE)