<template lang="">
    <div>
         <h2>Participants : </h2>
         <v-data-table :headers="headers" :items="participants" dense hide-default-footer>
            
                <template v-slot:item.annuler="{ item }">
               
                    <v-chip color="light-green accent-1" v-if="isUser(item)&&!isHistory">
                        <v-icon small @click="annulerReservationCovoiturage(item, userId)">
                            mdi-delete
                        </v-icon>
                    </v-chip>
                
                </template>
           
         </v-data-table>

    </div>
</template>
<script>
import { serviceCovoiturageApi } from "../services/index";
export default {
  name: "CovoiturageParticipants",
  
  props: {
    // participants: {},
    covoiturage: {},
    isHistory: Boolean,
  },
  data() {
    return {
        headers: [
        { text: "Prenom", value: "prenom" },
        { text: "Nom", value: "nom" },
        { text: "Email", value: "mail" },
        { text: "", value: "annuler" },
      ],
      userId: this.$store.state.storeCovoiturage.user.id,
      participants : this.$props.covoiturage.participant,
    };
  },
  methods: {
    annulerReservationCovoiturage(item, userId) {
      serviceCovoiturageApi.annulerCovoiturage(
        this.listecovoiturage.indexOf(item),
        userId
      );
    },
    isUser(item) {
      if (item.id == this.userId) {
        return true;
      }
      return false;
    },
    isHistoryFct() {
      if (this.isHistory == "true") {
        return true;
      }
      return false;
    },
  },
};
</script>
<style>
</style>