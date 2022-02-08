import { serviceCovoiturageApi } from "../../services/index";
// import serviceCovoiturageApi from "@/services"

const storeCovoiturage = {
  state: {
    monState: "State Store 01",
    user: { "id": 1, "nom": "Mourier", "prenom": "Denis" },
    listecovoiturage: [],

  },
  getters: {
    allCovoiturage: state => {
      return state.listecovoiturage;
    },
  },

  actions: {
    getAllCovoiturageUser({ commit },headers) {
      serviceCovoiturageApi.getAll(headers)
        .then(
          (response) => {
            commit('setListCovoiturage', response.data)
          }
        );
    }
  },

  mutations: {
    setListCovoiturage(state,data){
      console.log(data);
      state.listecovoiturage=data;
    }
  }
};

export { storeCovoiturage }