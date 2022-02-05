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
                    <v-text-field v-model="villeDepart"
                    label="Ville de depart">
                    </v-text-field>
                     <v-text-field v-model="villeArrivee"
                    label="Ville d'arrivée">
                    </v-text-field>
                     <v-text-field v-model="dateDepart"
                    label="Date de depart">
                    </v-text-field>
                </v-row>
              
                <v-btn v-on:click="rechercher(villeDepart,villeArrivee,dateDepart)">Rechercher</v-btn>
                <!-- <v-btn v-on:click="rafraichirListe1">Rafraichir</v-btn> -->
               </v-container>           
        </v-form>

        <listeCovoiturageIndep :listecovoiturage="listeRafraichie"/>
        
    </div>
</template>
<script>
import {dateApp} from "../utils/dateUtils";
import listeCovoiturageIndep from "../components/listeCovoiturageIndep.vue";
import { mapGetters } from "vuex";
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
    };
  },
  computed: {
    ...mapGetters(['getStoreCovoituragesResa',]),
    
  },
  watch: {
    getStoreCovoituragesResa: function () {
      this.listeRafraichie = this.$store.getters.getStoreCovoituragesResa
    }
  },
  methods: {
    // rafraichirListe1() {
    //   this.listeRafraichie = this.$store.getters.getStoreCovoituragesResa;
    // },
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
    rechercher(villeDepart, villeArrivee, dateRecherche) {
     this.$store.getters.getCovoiturageFromDepartArriveeDate(
        villeDepart,
        villeArrivee,
        dateRecherche
      );
    },
  },
};
</script>
<style>
</style>