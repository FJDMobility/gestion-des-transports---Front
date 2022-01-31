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
         
            <template v-slot:item.annul="{ item }">
              <button @click="annulerReservationCovoiturage(item, userId)">Annuler</button>
            </template>
            <template v-slot:item.detail="{ item }">
              <button @click="afficherDetail(item)">Détail</button>
            </template>
        
        </v-data-table> 
        <div v-if="valeursDetail" @click="()=>valeursDetail=null">
            <CovoiturageDetail :covoiturage="valeursDetail"/>
        </div>
    </div>
    
</template>
<script>
import serviceCovoiturageApi from "../services/serviceCovoiturageApi";
import CovoiturageDetail from "./CovoiturageDetail.vue";
export default {
  name: "listeCovoiturage",
  components: {
    CovoiturageDetail
  },
  data() {
    return {
      headers: [
        { text: "date/heure départ", value: "dateDepart" },
        { text: "villeDepart", value: "villeDepart" },
        { text: "ville arrivee", value: "villeArrivee" },
        { text: "places disponibles", value: "placesDisponibles" },
        { text: "status", value: "status" },
        { text: "actions", value: "annul" },
        { text: "", value: "detail" },
      ],
      listecovoiturage: this.$store.getters.allCovoiturage.covoiturages,
      userId: this.$store.state.user.id,
      valeursDetail: null,
    };
  },
  methods: {
    formatDateDisplay(dateTimeString) {
      return dateTimeString.split("T").join("  à ");
    },

    annulerReservationCovoiturage(item, userId) {
      serviceCovoiturageApi.annulerCovoiturage(
        this.listecovoiturage.indexOf(item),
        userId
      );
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;
    },
    afficherDetail(item) {
      console.log("afficherDetail")
      this.valeursDetail = [item];
    },
  },

  beforeCreate() {
    this.$store.getters.getAllCovoiturageUserId;
  },
};
</script>
<style>
</style>