<template>
  <div id="signup">
    <!-- logo & app name -->
    <div id="top">
      <img class="logo" src="../img/logo.png" alt="logo missing" width="80"/>
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Welcome to Roomie!</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div id="input">
        <label>Please enter your email address</label>
        <input class="field" type="text" v-model="email" />
      </div>
      <br /><br />
      <!-- create password -->
      <div id="input">
        <label>Create a password</label>
        <input class="field" type="text" v-model="password" />
      </div>
      <br /><br />
      <!-- confirm password -->
      <div id="input">
        <label>Confirm your password</label>
        <input class="field" type="text" />
      </div>
      <br /><br />
      <!-- signup button -->
      <button id="submit" @click="signup()">Sign up</button>
      <br /><br />
      <!-- existed user -->
      <div id="old_user">
        <div id="QA">
          <label>Already have an account?</label>
          <router-link to="/login">login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import instance from "../axios";
export default {
  data() {
    return {
      email: "",
      password: "",
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
