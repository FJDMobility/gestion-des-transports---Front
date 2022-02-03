import Vue from "vue";
import Vuex from "vuex";
import {storeCovoiturage} from './modules/storeCovoiturage'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules : {
        storeCovoiturage : storeCovoiturage,
    }
  });

  export {store}