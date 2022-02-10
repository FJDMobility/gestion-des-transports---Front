<template>
  <div class="flex mx-auto justify-center">
    <div>
      
      <p
        v-show="invalidLogin"
        class="mb-3 bg-red-500 text-white p-2 text-center"
      >
        Sorry, invalid!
      </p>
      <div class="container" id="container" ms-4>
        <form @submit.prevent="authenticateUser">
  <div class="form-group">
    <label for="exampleInputEmail1" >Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="username" placeholder="username" v-model="username">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <br>
  <button type="submit" class="btn btn-primary">Se connecter</button>
</form>
</div>
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
width: 250px;
position: absolute;

}
</style>