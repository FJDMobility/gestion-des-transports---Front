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
import {serviceCovoiturageApi} from "../services/index"
// import dateApp from "../utils/dateApp";
export default {
  name: "CovoiturageParticipants",
  props: { 
      participants: {},
      isHistory: Boolean,
      },
  data() {
      return {
          headers: [
        { text: "Prenom", value: "prenom" },
        { text: "Nom", value: "nom" },
        { text: "Email", value: "mail" },
        { text: "Téléphone", value: "telephone" },
        { text: "", value: "annuler"}
       ],
       tbParticipants: this.participants,
       userId: this.$store.state.user.id,
      }
  },
  methods: {
    annulerReservationCovoiturage(item, userId) {
            serviceCovoiturageApi.annulerCovoiturage(
             this.listecovoiturage.indexOf(item),
                userId);
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;
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
    }
    
  },
};
</script>
<style>
</style>