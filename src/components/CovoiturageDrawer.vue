<template>
  <div>
    <v-toolbar class="light-blue" />
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-divider dark v-if="item.divider" :key="item.icon"></v-divider>
        <v-list-item ripple :to="item.action" :key="i" v-else>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="body-2">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  data: function () {
    return {
      items: [
        { icon: "mdi-home", text: "Accueil", action: "/" },
        {
          icon: "mdi-car-clock",
          text: "Mes covoiturages",
          action: "/listecovoiturage",
        },
        {
          icon: "mdi-car-arrow-left", //mdi-calendar-clock
          text: "Reserver un covoiturage",
          action: "/covoiturageresa",
        },
                {
          icon: "mdi-help", //mdi-calendar-clock
          text: "Se connecter",
          action: "/login",
        },
        { icon: "mdi-help", text: "Help", action: "/about" },
       
      ],
    };
  },
};
</script>