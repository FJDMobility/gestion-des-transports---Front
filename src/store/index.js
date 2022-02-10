import Vue from "vue";
import Vuex from "vuex";
import storeCovoiturage from './modules/storeCovoiturage'
import {storeUser} from './modules/storeUser.js'
import createPersistedState from 'vuex-persistedstate';
import {storeApiVilles} from './modules/storeApiVilles'
Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        storeCovoiturage : storeCovoiturage,
        storeUser : storeUser,
        storeApiVilles : storeApiVilles,
    },
    plugins: [createPersistedState()],

  });




