<template lang="">
    <div>
        <h2>Liste des covoiturages pour : </h2>
        <p>  {{$store.state.storeUser.user.prenom}} {{$store.state.storeUser.user.nom}} -  
          <v-chip :color="getHistoryColor(date)">
                          {{date}}
            </v-chip>
            -
            <v-chip :color="getHistoryColor('2000-01-01')">
                          Historique
            </v-chip>
            -
            <v-chip :color="getHistoryColor('9999-01-01')">
                          A venir
            </v-chip>
           </p>
        <v-data-table v-if="listecovoiturage" :headers="headers" 
        :items="listecovoiturage" @click:row="afficherDetail" single-select>
          <template v-slot:item.dateDepart="{ item }">
            <v-chip :color="getHistoryColor(item.dateDepart)">
                          {{ formatDateDisplay(item.dateDepart) }}
            </v-chip>
          </template>
         
            <template v-slot:item.detail="{ item }">
             <button @click="afficherDetail(item)">Détail</button>
            </template>
            <!-- <template v-slot:item.placesDisponibles="{ item }">
              <p>
                {{item.placesDisponibles-item.participant.length}}
              </p>
            </template> -->
        </v-data-table> 
          <div v-if="valeursDetail" @close="colseChild">
            <v-btn @click="()=>valeursDetail=null">
              <v-icon color="red">
                mdi-close-box
              </v-icon>
            </v-btn>
            <CovoiturageDetail :covoiturage="valeursDetail"/>
            <p></p>
            <CovoiturageParticipants :participants="valeursParticipants" :idcovoiturage="valeursDetail[0].id" :isHistory="isHistory(dateDetail)"/>
          </div>
    </div>
    
</template>
<script>
import CovoiturageDetail from "./CovoiturageDetail.vue";
import CovoiturageParticipants from "./CovoiturageParticipants.vue"
import {dateApp} from "../utils/dateUtils";
import router from "../router";
export default {
  name: "listeCovoiturage",
  components: {
    CovoiturageDetail,
    CovoiturageParticipants
  },
  data() {
    return {
      headers: [
        { text: "date/heure départ", value: "dateDepart" },
        { text: "ville départ", value: "villeDepart" },
        { text: "ville arrivée", value: "villeArrivee" },
        { text: "places disponibles", value: "placesDisponibles" },
        { text: "statut", value: "status" },
        { text: "actions", value: "detail" },
      ],
      userId: this.$store.state.storeCovoiturage.user.id,
      valeursDetail: null,
      valeursParticipants: null,
      date: dateApp(),
      dateDetail: "",
      resapossible: false,
      };
  },
  computed : {
     listecovoiturage() {
      console.log("covoiturage list dans la vue : "+ this.$store.getters.allCovoiturage);
      return this.$store.getters.allCovoiturage;
    }
  },
  methods: {
    formatDateDisplay(dateTimeString) {
      return dateTimeString.split("T").join("  à ");
    },
    colseChild(){
      console.log("Je dois fermer");
    },

    // annulerReservationCovoiturage(item, userId) {
    //   serviceCovoiturageApi.annulerCovoiturage(
    //     this.listecovoiturage.indexOf(item),
    //     userId
    //   );
    //   // this.editedIndex = this.desserts.indexOf(item);
    //   // this.editedItem = Object.assign({}, item);
    //   // this.dialogDelete = true;
    // },
    afficherDetail(item, row) {
      this.valeursDetail = [item];
      this.valeursParticipants = item.participant;
      row.select(true);
      this.dateDetail = item.dateDepart;
      console.log("afficher detail, valeursDetail.id : ",this.valeursDetail[0].id);
      
    },
    getHistoryColor(dateparm) {
      if (this.isHistory(dateparm)) {
        return "red"
      }
      if (this.isToday(dateparm)) {
        return "orange"
      }
      return "green";
    },
    isHistory(dateparm) {
      let dateItem = dateparm.split("T")[0];
      let dateNow = dateApp();
      if (dateItem < dateNow) {
        return true;
      }
      return false;
    },
    isToday(dateparm) {
      let dateItem = dateparm.split("T")[0];
      let dateNow = dateApp();
      if (dateItem == dateNow) {
        return true
      }
      return false
    },
    
  },

beforeMount() {
    if(this.$store.getters.isAuthenticated === true){
      this.$store.dispatch('getAllCovoiturageUser', this.$store.getters.getHeaders);
    }else{
      router.push("/login")
    }
 },



};
</script>
<style>
tr.v-data-table__selected {
    background: #BBDEFB !important;
  }
</style>