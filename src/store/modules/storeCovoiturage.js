import { serviceCovoiturageApi } from "../../services/index";
// import serviceCovoiturageApi from "@/services"

const state = {
  monState: "State Store 01",
  user: { "id": 1, "nom": "Mourier", "prenom": "Denis", "mail": "denis.mourier@covoit.com" },
  listecovoiturage: null,
  listecovoiturageresa: null,
  covoiturageresaOrganisateur: null,
  covoiturageresaVehicule: null,
  covoiturageresaParticipants: null,

};

const getters = {
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



export default { state, getters }