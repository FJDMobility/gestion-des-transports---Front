<template lang="">
    <div>
        <div>
        <v-container>
            <listeCovoiturage/>
        </v-container>
        </div>
    </div>
</template>
<script>
import listeCovoiturage from "../components/listeCovoiturage.vue";
export default {
  name: "Covoiturage",
  components: {
    listeCovoiturage,
  },
};
</script>
<style>
</style>