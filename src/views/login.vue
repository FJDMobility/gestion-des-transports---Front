<template>
  <div class="flex mx-auto justify-center">
    <div>
      <h1 class="font-bold text-lg mb-3">Login</h1>
      <p
        v-show="invalidLogin"
        class="mb-3 bg-red-500 text-white p-2 text-center"
      >
        Sorry, invalid!
      </p>
      <form @submit.prevent="authenticateUser">
        <p class="mb-3">
          <v-container id="container">
            <v-text-field autofocus label="username" v-model="username">
            </v-text-field>
            <v-text-field label="password" type="password" v-model="password">
            </v-text-field>
             <v-btn type="submit" elevation="2" color="error">Login</v-btn>
          </v-container>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  data() {
    return {
      username: "",
      password: "",
      invalidLogin: false,
    };
  },
  methods: {
    authenticateUser: function () {
      console.log("username : " + this.username);
      console.log("password : " + this.password);
      let data = {
        username: this.username,
        password: this.password,
      };
      this.$store
        .dispatch("authenticate", data)
        .then((res) => {
          console.log("Je suis connecté " + res);
          router.push("/");
          this.invalidLogin = false;
        })
        .catch((error) => {
          console.log("J'ai un pb : " +error);
          this.invalidLogin = true;
        });
    },
  },
};
</script>

<style>
#container{
  width: 15 rem;
  margin: auto;
  position: absolute;
}
</style>