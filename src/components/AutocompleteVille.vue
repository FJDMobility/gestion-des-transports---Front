<template>
    <v-autocomplete
        v-model.trim="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        item-text="Description"
        item-value="API"
        :placeholder="text"
        prepend-icon="mdi-city"
        return-object
        @input="handleInput"
    ></v-autocomplete>
</template>

<script>
import axios from "axios"
axios.defaults.paramsSerializer = (params) => {
    let result = '';
        Object.keys(params).forEach(key => {
            result += `${key}=${encodeURIComponent(params[key])}&`;
        });
        return result.substring(0, result.length - 1);
}

export default {
    props :{
        text: String,
    },
    data: () => ({
        entries: [],
        isLoading: false,
        model: null,
        search: null,
        villes : [],
    }),
    computed: {
        items() {
            return this.villes.map(ville => {
                return ville.nom.replaceAll('-', ' ')
            })
        },
    },
    methods: {
        handleInput(value){
            console.log(value);
            this.$emit('input',value)
        }
    },
    watch: {
        async search(newNom, oldNom) {
            if (oldNom != null && newNom.trim() === oldNom.trim()) {
               return  
            }         
            await axios.get(`https://geo.api.gouv.fr/communes`, {
                params: {
                    "nom": newNom,
                    "limit": 5,
                }
            }).then(response => {
                console.log(response.data);
                this.villes = response.data
            })
        },
    },
}
</script>