import Vue from "vue";
import Vuex from "vuex";
import storeCovoiturage from './modules/storeCovoiturage'

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        storeCovoiturage,
    }
  });




