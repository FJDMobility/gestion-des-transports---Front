<template>
<v-app>
    <CovoiturageToolbar />
    <v-main>
      <v-slide-y-transition mode="out-in">
        <router-view />
      </v-slide-y-transition>
    </v-main>
  </v-app>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>

<script>
// @ est un alias pour /src
import CovoiturageToolbar from "@/components/CovoiturageToolbar";
export default {
  name: "app",
  components: { CovoiturageToolbar },
};
</script>
