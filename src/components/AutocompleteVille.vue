<template>
  <v-autocomplete
        v-model="model"
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
</template>

<script>
  export default {
    data: () => ({
      descriptionLimit: 5,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }),
    computed: {
      fields () {
        if (!this.model) return []
        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },

      items () {
        return this.entries.map(entry => {
          return entry.nom
        })
      },
    },
    watch: {
      search (input) {
        this.$store.dispatch('loadVillesFromApi',input)
        this.entries = this.$store.getters.getVilles;
        console.log(this.entries);
      },
    },
  }
</script>