<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <CovoiturageDrawer />
    </v-navigation-drawer>
    <v-app-bar dark color="blue lighten-4" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!--
      <v-toolbar-title @click="goHome" class="white--text">
        {{ $t("title") }}
      </v-toolbar-title>
      -->
      <div>
        <v-container>
          <v-row>
            <v-col >
              <v-toolbar-title @click="goHome" class="white--text">
                Covoiturage
              </v-toolbar-title>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
// attention, il faut utiliser default !!!
import CovoiturageDrawer from "@/components/CovoiturageDrawer.vue";
export default {
  name: "CovoiturageToolbar",
  components: { CovoiturageDrawer },
  data: function () {
    return {
      drawer: false,
    };
  },
  methods: {
    goHome() {
      this.$router.replace("/");
    },
  },
};
</script>
