import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'
import serviceCovoiturageApi from './services/serviceCovoiturageApi'
import { default as dateApp } from '@/utils/dateApp'

Vue.use(Vuex)

Vue.config.productionTip = false

// init repo de dev :
// const allcovoiturageuser = 
// {
  // "covoiturages":
  const allcovoiturageuser = [
    {
      "id": 1,
      "dateDepart": "2022-02-14T8:00",
      "status": "ouvert",
      "organisateur": {
        "id": 1,
        "prenom": "Victor",
        "nom": "Hugo"
      },
      "voiture": {
        "id": 1,
        "marque": "renault",
        "model": "twingo",
        "nbrPlaces": 3,
        "immatriculation": "1234 tt 25"
      },
      "participant": [{
        "id": 2,
        "nom": "Martin",
        "prenom": "Gerard",
        "mail": "gerard.martin@covoit.com"
      },
      {
        "id": 3,
        "nom": "Durant",
        "prenom": "michel",
        "mail": "michel.durant@covoit.com"
      },
      {
        "id": 1,
        "nom": "Mourier",
        "prenom": "Denis",
        "mail": "denis.mourier@covoit.com"
      }
      ],
      "villeDepart": "Nîmes",
      "villeArrivee": "Montpellier",
      "placesDisponibles": 3
    },
    {
      "id": 2,
      "dateDepart": "2022-02-16T8:00",
      "status": "ouvert",
      "organisateur": {
        "id": 1,
        "prenom": "Jean-Jacques",
        "nom": "Rousseau"},
      "voiture": {
        "id": 1,
        "marque": "renault",
        "model": "clio",
        "nbrPlaces": 2,
        "immatriculation": "567 tt 25"
      },
      "participant": [{
        "id": 3,
        "nom": "Durant",
        "prenom": "michel",
        "mail": "michel.durant@covoit.com"
      },
      {
        "id": 1,
        "nom": "Mourier",
        "prenom": "Denis",
        "mail": "denis.mourier@covoit.com"
      }],
      "villeDepart": "Nîmes",
      "villeArrivee": "Le grau du roi",
      "placesDisponibles": 0,
    },
    {
      "id": 3,
      "dateDepart": "2022-02-17T8:00",
      "status": "ouvert",
      "organisateur": {
        "id": 1,
        "prenom": "Jean-Jacques",
        "nom": "Rousseau"},
      "voiture": {
        "id": 1,
        "marque": "renault",
        "model": "clio",
        "nbrPlaces": 2,
        "immatriculation": "567 tt 25"
      },
      "participant": [{
        "id": 1,
        "nom": "Mourier",
        "prenom": "Denis",
        "mail": "denis.mourier@covoit.com"
      }],
      "villeDepart": "Nîmes",
      "villeArrivee": "Uzes",
      "placesDisponibles": 0,
    }
    ];
// };

localStorage.removeItem("covoiturageRepo")
localStorage.setItem("covoiturageRepo", JSON.stringify(allcovoiturageuser));
// localStorage.setItem("covoiturageRepo", allcovoiturageuser);



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
      state.listecovoiturage = serviceCovoiturageApi.getAll(state.user.id);
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