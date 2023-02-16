<template>
  <div id="forget">
    <!-- logo & app name -->
    <div id="top">
      <img class="logo" src="../img/logo.png" alt="logo missing" width="80"/>
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Find my Password</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div id="input">
        Enter your email address to reset password
        <input class="field" type="text" v-model="email" />
      </div>
      <br /><br />
      <button id="submit" @click="forget()">
        <router-link to="/reset">Send</router-link>
      </button>
    </div>
  </div>
</template>

<script>
// import instance from "../axios";
export default {
  data() {
    return {
      email: "",
    };
  },
  //   methods: {
  //     login() {
  //       alert("good");
  //       const data = {
  //         email: this.username,
  //         password: this.password,
  //       };
  //       var tempThis = this;
  //     },
  //   },
};
</script>
