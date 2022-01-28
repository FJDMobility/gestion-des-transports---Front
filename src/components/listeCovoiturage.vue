<template lang="">
    <div>
        <h2>Liste des covoiturages pour : </h2>
        <p> {{$store.state.user.prenom}} {{$store.state.user.nom}}  </p>
        <v-data-table :headers="headers" :items="listecovoiturage">
          <template v-slot:item.dateDepart="{ item }">
            <v-chip color="green">
              {{ formatDateDisplay(item.dateDepart) }}
            </v-chip>
          </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
  name: "listeCovoiturage",
  data() {
    return {
      headers: [
        { text: "date/heure départ", value: "dateDepart" },
        { text: "villeDepart", value: "villeDepart" },
        { text: "ville arrivee", value: "villeArrivee" },
        { text: "places disponibles", value: "placesDisponibles" },
      ],
      listecovoiturage: this.$store.getters.allCovoiturage.covoiturages,
    };
  },
  methods: {
    formatDateDisplay(dateTimeString) {
      return dateTimeString.split("T").join("  à ");
    },
  },
  mounted() {
    //   this.refresh()
    this.$store.getters.getAllCovoiturageUserId;
  },
  // beforeUpdate() {
  //   this.$store.getters.getAllCovoiturageUserId;
  // } ,
};
</script>
<style>
</style>