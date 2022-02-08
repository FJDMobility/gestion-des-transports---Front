import Vue from "vue";
import Vuex from "vuex";
import {storeCovoiturage} from './modules/storeCovoiturage'
import {storeUser} from './modules/storeUser.js'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        storeCovoiturage : storeCovoiturage,
        storeUser : storeUser,
    },
    plugins: [createPersistedState()],

  });




