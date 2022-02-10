CovoiturageParticipants
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
import router from "../router";
export default {  
  name: "CovoiturageParticipants",

  props: {
    participants: {},
    isHistory: Boolean,
    idcovoiturage: Number,

  },
  data() {
    return {
      headers: [
        { text: "Prenom", value: "prenom" },
        { text: "Nom", value: "nom" },
        { text: "Email", value: "mail" },
        { text: "", value: "annuler" },
      ],
      // userId: this.$store.state.storeCovoiturage.user.id,
      userId: this.$store.state.storeUser.user.id,
    };
  },
  methods: {
    annulerReservationCovoiturage() {
      console.log("annul participant covoiturage.id : " + this.$props.idcovoiturage)
      console.log("headers dans la vue : " + this.$store.getters.getHeaders);
      this.$store.dispatch('annulerReservationCovoiturage',
        {
          "idCovoiturage": this.$props.idcovoiturage,
          "headers": this.$store.getters.getHeaders
        })
      this.$emit('close')
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