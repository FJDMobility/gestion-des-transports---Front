import axios from "axios";

const storeApiVilles = {
    state: {
        villes :[]
    },
    getters: {
        getVilles:state => state.villes,        
    },
    actions: {
        loadVillesFromApi({commit},nomVille){
            console.log("url : " + `https://geo.api.gouv.fr/communes?nom=${nomVille}&limit=10`); 
            axios.get(`https://geo.api.gouv.fr/communes`,{
                "nom":nomVille,
                "limit":10,
            }).then(response =>{
                commit('setVilles',response.data)
            })        
        }
    },
    mutations: {
        setVilles (state,data){
            state.villes = data;
        }
    },
}
export { storeApiVilles }