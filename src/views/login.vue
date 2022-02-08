<template>
  <div class="flex mx-auto justify-center">
    <div>
      <h1 class="font-bold text-lg mb-3">Login</h1>
      <p v-show="invalidLogin" class="mb-3 bg-red-500 text-white p-2 text-center">Sorry, invalid!</p>
      <form @submit.prevent="authenticateUser">
        <p class="mb-3">
          <input
            type="text"
            name="username"
            v-model="username"
            class="appearance-none p-1 border"
          />
        </p>
        <p class="mb-3">
          <input
            type="password"
            name="password"
            v-model="password"
            class="appearance-none p-1 border"
          />
        </p>

        <p>
          <button type="submit" class="border bg-blue-500 text-white py-2 px-4">Login</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>import router from "../router";

export default {
  data() {
    return {
      username: "",
      password: "",
      invalidLogin: false
    };
  },
  methods: {
    authenticateUser: function () {
      console.log("username : " + this.username)
      console.log("password : " + this.password)
      let data = {
        "username": this.username,
        "password": this.password
      }
      console.log("data", data);
      this.$store.dispatch('authenticate', data).then(res => {
        console.log(res);
        router.push("/");
        this.invalidLogin = false;
      }).catch((error) => {
        console.log(error);
        this.invalidLogin=true;
      })
    }

  }
};
</script>