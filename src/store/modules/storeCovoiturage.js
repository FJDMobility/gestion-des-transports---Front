import serviceCovoiturageApiProd from "../../services/serviceCovoiturageApiProd";

const storeCovoiturage = {
  state: {
    monState: "State Store 01",
    user: { "id": 1, "nom": "Mourier", "prenom": "Denis" },
    listecovoiturage: null,

  },
  getters: {
    allCovoiturage: state => {
      return state.listecovoiturage;
    },

    getAllCovoiturageUserId: (state) => {
      serviceCovoiturageApiProd.getAll(state.user.id).then(
        (response) => {
          state.listecovoiturage = response.data
          console.log("response.data : ", response.data);
        }
      );
      console.log("retour service liste covoiturage : ", state.listecovoiturage);

    },


  }

};

export {storeCovoiturage}