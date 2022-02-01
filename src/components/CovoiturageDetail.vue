<template lang="">
    <div>
        <h2>Détail : </h2>
        <v-data-table :headers="headers" :items="covoiturage" dense hide-default-footer>
          <template v-slot:item.organisateur="{ item }">
            <v-chip color="light-green accent-1">
               {{ item.organisateur.prenom+"  "+item.organisateur.nom }}
           </v-chip>
          </template>

        </v-data-table>
    </div>
</template>
<script>
export default {
  name: "CovoiturageDetail",
  props : {
        covoiturage : {},
    },
  data() {
    return {
      headers: [
        { text: "Organisateur", value: "organisateur" },
        { text: "Marque", value: "voiture.marque" },
        { text: "Modèle", value: "voiture.model" },
        { text: "Immatriculation", value: "voiture.immatriculation" },
        { text: "Nb de places", value: "voiture.nbrPlaces" },
      ],
    //   covoiturageAffichage: this.covoiturage,
    };
  },
  methods: {
      affichOrganisateur() {
          return this.covoiturage[0].organisateur.prenom + "  " + this.covoiturage[0].organisateur.nom
      }
  },
};
</script>
<style>
</style>