import { serviceCovoiturageApi } from "../../services/index";
// import Vue from "vue";
// import serviceCovoiturageApi from "@/services"

const state = {
  monState: "State Store 01",
  user: { "id": 1, "nom": "Mourier", "prenom": "Denis", "mail": "denis.mourier@covoit.com" },
  listecovoiturage: null,
  listecovoiturageresa: null,
  covoiturageresaSelected: null,
  // covoiturageresaOrganisateur: null,
  // covoiturageresaVehicule: null,
  // covoiturageresaParticipants: null,

};

const getters = {

  getStoreCovoiturageFullData: (state) => {
    return state.covoiturageresaSelected;
  },

  // setcovoiturageresaSelected: (state) => (data) => {
  //   state.covoiturageresaSelected = data;
  // },

  // getCovoiturageFullDataFromApi: (state) => (covoiturageId) => {
  //   console.log("coucou, covoiturageId = " + covoiturageId)
  //   serviceCovoiturageApi.getCovoiturageFullDataFromApi(covoiturageId)
  //     .then(
  //       (response) => {
  //         // state.covoiturageresaSelected = response.data;
  //         // mutations.setcovoiturageresaSelected(response.data)
  //         state.covoiturageresaSelected = response.data;
  //         // context.commit("setcovoiturageresaSelected", response.data);
  //         console.log("coucou - coucou")
  //         // return state.covoiturageresaSelected; 
  //       })
  // },

  allCovoiturage: state => {
    return state.listecovoiturage;
  },

  getAllCovoiturageUserId: (state) => {
    // state.listecovoiturage = serviceCovoiturageApi.getAll(state.user.id);
    serviceCovoiturageApi.getAll(state.user.id)
      .then(
        (response) => {
          state.listecovoiturage = response.data
          // console.log("response.data : ", response.data);
        }
      );
    console.log("retour service liste covoiturage : ", state.listecovoiturage);
  },
  getCovoiturageFromDepartArriveeDateApi: (state) => (villeDepart, villeArrivee, dateRecherche) => {
    serviceCovoiturageApi.getCovoiturageFromDepartArriveeDateFromAPiToStore(villeDepart, villeArrivee, dateRecherche)
      .then(
        (response) => {
          state.listecovoiturageresa = response.data;
          return state.listecovoiturageresa; //utiliser un mutator à placer dans mutations:
        })
    // .then(
    //   (response) => {
    //     response.data;
    //     return state.listecovoiturageresa;
    //   })
  },
  getStoreCovoituragesResa: (state) => {
    return state.listecovoiturageresa;
  },

  doReservation: (state) => (covoiturageId) => {
    serviceCovoiturageApi.sendReservation(covoiturageId, state.user)
      .then(
        (response) => {
          if (response.OK) {
            console.log("doReservation")
            // recup les participants au covoiturage
            // refaire une rq sur la base avec toutes les info de la vue
          }
        }
      );
  },
  getUser: (state) => {
    return state.user;
  },
};
    
const mutations = {
  setcovoiturageresaSelected(state, data) {
    state.covoiturageresaSelected = data;
  },
};

const actions = {
<<<<<<< HEAD
  getCovoiturageFullDataFromApi({ commit }, covoiturageId) {
    console.log("coucou")
    serviceCovoiturageApi.getCovoiturageFullDataFromApi(covoiturageId)
      .then(
        (response) => {
          commit('setcovoiturageresaSelected', response.data);
          console.log("coucou - coucou")
        })
  },

};

export default { state, getters, actions, mutations }
=======
  getAllCovoiturageUser({ commit },headers) {
    serviceCovoiturageApi.getAll(headers)
      .then(
        (response) => {
          commit('setListCovoiturage', response.data)
        }
      );
  }
};

const mutations = {
  setListCovoiturage(state,data){
    console.log(data);
    state.listecovoiturage=data;
  }
};

export default { state, getters, actions, mutations }
>>>>>>> 46c2298e436f81447728cd81a18e18e624205960
