<template lang="">
    <div>
        <h2>Réserver un covoiturages : </h2>
        <p> {{$store.state.storeCovoiturage.user.prenom}} {{$store.state.storeCovoiturage.user.nom}} - 
          <v-chip :color="getHistoryColor(date)">
                          {{date}}
            </v-chip>
        </p>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-text-field v-model="villeDepart" autofocus="true"
                    label="Ville de depart">
                    </v-text-field>
                     <v-text-field v-model="villeArrivee"
                    label="Ville d'arrivée">
                    </v-text-field>
                     <v-text-field v-model="dateDepart" :disabled="isVilleOK"
                    label="Date de depart">
                    </v-text-field>
                </v-row>
              
                <v-btn v-on:click="rechercher(villeDepart,villeArrivee,dateDepart,isFirstRequestRound)">Rechercher</v-btn>
                <v-btn v-on:click="initRecherche">Nouvelle recherche</v-btn>
               </v-container>           
        </v-form>

        <listeCovoiturageIndep :listecovoiturage="listeRafraichie"/>
        
    </div>
</template>
<script>
import { dateApp } from "../utils/dateUtils";
import listeCovoiturageIndep from "../components/listeCovoiturageIndep.vue";
import { mapGetters } from "vuex";
import { getcvResacovoituragesFromArray } from "@/model/requests/rqResaCovoiturage";
export default {
  name: "CovoiturageResa",
  components: {
    listeCovoiturageIndep,
  },
  data() {
    return {
      villeDepart: "",
      villeArrivee: "",
      dateDepart: "",
      date: dateApp(),
      valid: false,
      listeRafraichie: [],
      isFirstRequestRound: true,
      isDateAvailable: false,
    };
  },
  computed: {
    ...mapGetters(["getStoreCovoituragesResa"]),
    isVilleOK() {
      if (this.villeDepart == "" && this.villeArrivee == "") {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    getStoreCovoituragesResa: function () {
      this.listeRafraichie = this.$store.getters.getStoreCovoituragesResa;
    },
  },
  methods: {
    initRecherche() {
      this.isFirstRequestRound = true;
      this.villeDepart = "";
      this.villeArrivee = "";
      this.listeRafraichie = [];
    },
    getHistoryColor(dateparm) {
      if (this.isHistory(dateparm)) {
        return "red";
      }
      if (this.isToday(dateparm)) {
        return "orange";
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
        return true;
      }
      return false;
    },
    rechercher(villeDepart, villeArrivee, dateRecherche, isFirstRequestRound) {
      if (isFirstRequestRound == true) {
        this.$store.getters.getCovoiturageFromDepartArriveeDateApi(
          villeDepart,
          villeArrivee,
          dateRecherche
        );
        this.isFirstRequestRound = false;
        console.log("recherche API lancee");
      }

      if (isFirstRequestRound == false) {
        this.listeRafraichie =
          getcvResacovoituragesFromArray(
            villeDepart,
            villeArrivee,
            dateRecherche,
            this.$store.getters.getStoreCovoituragesResa
          );
          console.log("recherche 2 Store lancee : " + this.$store.getters.getStoreCovoituragesResa);

      }
    },
  },
};
</script>
<style>
</style>