<template lang="">
    <div>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-text-field
                    label="Ville de depart">
                    </v-text-field>
                     <v-text-field
                    label="Ville d'arrivée">
                    </v-text-field>
                     <v-text-field
                    label="Date de depart">
                    </v-text-field>
                </v-row>
              
                <!-- <v-btn v-on:click="action">Enregistrer</v-btn> -->
               </v-container>           
        </v-form>
        
    </div>
</template>
<script>
export default {
    name: "CovoiturageResa",
    
}
</script>
<style>
    
</style>