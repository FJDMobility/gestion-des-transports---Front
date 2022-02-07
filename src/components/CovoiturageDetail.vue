<template lang="">
    <div>
        <h2>Détail : </h2>
        <v-data-table :headers="headers" :items="covoiturage" dense hide-default-footer>
          <template v-slot:item.organisateur="{ item }">
            <v-chip color="light-green accent-1">
               {{ item.organisateur.prenom+"  "+item.organisateur.nom }}
           </v-chip>
          </template>
          <template v-slot:item.action="{ item }">
            <v-btn v-if="placesrestantes!=0" @click="reserver(item)">Reserver</v-btn>
          </template>

        </v-data-table>
    </div>
</template>
<script>
export default {
  name : "CovoiturageDetail",
  props : {
        covoiturage : {},
        resapossible : Boolean,
        placesrestantes : Number,
    },
  data() {
    return {
      headers: [
        { text: "Organisateur", value: "organisateur" },
        { text: "Marque", value: "voiture.marque" },
        { text: "Modèle", value: "voiture.model" },
        { text: "Immatriculation", value: "voiture.immatriculation" },
        { text: "Nb de places", value: "voiture.nbrPlaces" },
        { text: "Action", value: "action" },
      ],
    //   covoiturageAffichage: this.covoiturage,
    };
  },
  methods: {
      affichOrganisateur() {
          return this.covoiturage[0].organisateur.prenom + "  " + this.covoiturage[0].organisateur.nom
      },
      reserver(covoiturage) {
        this.$store.getters.doReservation(covoiturage.Id)
      }
  },
};
</script>
<style>
</style>