<template>
  <v-card
    color="red lighten-2"
    dark
  >
    <v-card-title class="text-h5 red lighten-3">
      Search for Public APIs
    </v-card-title>
    <v-card-text>
      Explore hundreds of free API's ready for consumption! For more information visit
      <a
        class="grey--text text--lighten-3"
        href="https://github.com/toddmotto/public-apis"
        target="_blank"
      >the GitHub repository</a>.
    </v-card-text>
    <v-card-text>
      <v-autocomplete
        v-model.trim="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="API"
        label="Public APIs"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!model"
        color="grey darken-3"
        @click="model = null"
      >
        Clear
        <v-icon right>
          mdi-close-circle
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }),
    computed: {
      items () {
                  
          return this.$store.getters.getVilles.map(ville => {
          return ville.nom.replaceAll('-',' ')
        })
      },
    },
    watch: {
      search (newVal, oldVal) {
        console.log("new value : "+newVal+'.');
        console.log("old value : "+oldVal+'.');        
        if(newVal!=null && oldVal!=null && newVal.trim() === oldVal.trim()){
          return
        }
        this.$store.dispatch('loadVillesFromApi',newVal.trim())        
      },
    },
  }
</script>