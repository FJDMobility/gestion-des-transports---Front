<template lang="">
    <div>
      <div class="container">
  
    <br>
    <br>
           <button type="button" class="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Organiser un covoiturage
</button>
<br>
<br>
<br>
    <!-- <div class="row">

                            <div class="card" style="width: 18rem;" v-for="item in mescovoiturages" :key="item.key">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{item.dateDepart}}</h5>
                       <h5 class="card-title">{{item.villeDepart}}</h5>
                       <h5 class="card-title">{{item.villeArrivee}}</h5>
                       <h5 class="card-title">{{item.placesDisponibles}}</h5>
                       <p class="card-text">{{item.status}}</p>
                       <div>
                        <button class="btn btn-success ms-2"  data-bs-toggle="modal" data-bs-target="#update" v-on:click="getData(item.dateDepart,item.villeDepart,item.villeArrivee,item.description,item.key)">Modifier</button>
                        <button class="btn btn-danger ms-2"  v-on:click="deletecovoiturage(item.key)">Supprimer</button>
                    </div>
                    </div>
                    </div>
                    


    </div> -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter un nouveau trajet</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- form start -->
    <form>
<input class="form-control" type="date" placeholder="Date / Heure départ" aria-label="default input example" v-model="headers.dateDepart">
<input class="form-control" type="text" placeholder="ville de départ" aria-label="default input example" v-model="headers.villeDepart">
<input class="form-control" type="text" placeholder="ville d'arrivée" aria-label="default input example" v-model="headers.villeArrivee">
<input class="form-control" type="text" placeholder="Places disponibles" aria-label="default input example" v-model="headers.placesDisponibles">
<input class="form-control" type="text" placeholder="statut" aria-label="default input example" v-model="headers.status">
<!-- <div class="alert alert-success" v-if="messageSuccess">{{messageSuccess}}</div> -->
<button type="submit" class="btn btn-success">Ajouter</button>


    </form>
    <!-- form end -->
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

      </div>
      </div>
      
    </div>
  </div>
  
</div>



      
</div>


        <h2>Liste des covoiturages pour : </h2>
        <p> {{$store.state.storeCovoiturage.user.prenom}} {{$store.state.storeCovoiturage.user.nom}} - 
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
            <template v-slot:item.placesDisponibles="{ item }">
              <p>
                {{item.placesDisponibles-item.participant.length}}
              </p>
            </template>
        </v-data-table> 
          <div v-if="valeursDetail" >
            <v-btn @click="()=>valeursDetail=null">
              <v-icon color="red">
                mdi-close-box
              </v-icon>
            </v-btn>
            <CovoiturageDetail :covoiturage="valeursDetail"/>
            <p></p>
            <CovoiturageParticipants :participants="valeursParticipants" :isHistory="isHistory(dateDetail)"/>
          </div>
    </div>
    
</template>
<script>
import CovoiturageDetail from "./CovoiturageDetail.vue";
import CovoiturageParticipants from "./CovoiturageParticipants.vue"
import {dateApp} from "../utils/dateUtils";
export default {
  name: "listeCovoiturage",
  components: {
    CovoiturageDetail,
    CovoiturageParticipants
  },
  data() {
    return {
      headers: [
        { date: "date/heure départ", value: "dateDepart" },
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
      };
  },
  computed : {
     listecovoiturage() {
      return this.$store.getters.allCovoiturage;
    }
  },
  methods: {
    formatDateDisplay(dateTimeString) {
      return dateTimeString.split("T").join("  à ");
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

beforeCreate() {
    this.$store.getters.getAllCovoiturageUserId;
  },
};
</script>
<style>
tr.v-data-table__selected {
    background: #BBDEFB !important;
  }
</style>