import { serviceUserAuthentication } from "../../services/prod/serviceUserAuthentication.js";

const storeUser = {
    state: {
        user: {},
        token: '',
        authenticated: false,
        error: '',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": ''
        }
    },
    getters: {
        isAuthenticated: state => {
            return state.authenticated;
        },
        getToken: state => {
            return state.getToken;
        },
        getUserInfos: state => {
            return state.info;
        },
        getError: state => {
            return state.error
        },
        getHeaders : state => {
            return state.headers
        }

    },
    actions: {
        authenticate({ commit, dispatch }, user) {
            return new Promise((resolve, reject) => {
                serviceUserAuthentication.autenticate(user).then(response => {
                    commit('registerToken', response.data)
                    dispatch('getUserInformation')
                    resolve()
                }).catch(error => {
                    commit('setError', "ERROR LOGIN")
                    reject(error)
                })
            })

        },
        getUserInformation({ commit, state }) {
            serviceUserAuthentication.getUserInformation(state.headers).then(response => {
                commit('registerUserInformation', response.data)
            }).catch(error => {
                console.log(error);
                commit('setError', "ERROR LOGIN")
            })
        }

    },
    mutations: {
        registerToken(state, dataResponse) {
            state.token = dataResponse.jwtToken;
            state.authenticated=true;
            state.headers.Authorization = 'Bearer ' + dataResponse.jwtToken
            localStorage.removeItem("covoiturageToken")
            localStorage.setItem("covoiturageToken", state.token);
        },
        registerUserInformation(state, dataResponse) {
            state.user = dataResponse
        },
        setError(state, message) {
            state.error = message;
            state.authenticated=false;
        }
    },
}
export { storeUser }