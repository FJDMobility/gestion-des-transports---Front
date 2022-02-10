import axios from "axios";
axios.defaults.paramsSerializer = (params) => {
    let result = '';
        Object.keys(params).forEach(key => {
            result += `${key}=${encodeURIComponent(params[key])}&`;
        });
        return result.substring(0, result.length - 1);

}

const storeApiVilles = {
    state: {
        villes: []
    },
    getters: {
        getVilles: state => state.villes,
    },
    actions: {
        async loadVillesFromApi({ commit }, nomVille) {
            console.log("url : " + `https://geo.api.gouv.fr/communes?nom=${nomVille}&limit=10`);
            await axios.get(`https://geo.api.gouv.fr/communes`, {
                params: {
                    "nom": nomVille,
                    "limit": 10,
                }
            }).then(response => {
                console.log(response.data);
                commit('setVilles', response.data)
            })
        }
    },
    mutations: {
        setVilles(state, data) {
            state.villes = data;
        }
    },
}
export { storeApiVilles }