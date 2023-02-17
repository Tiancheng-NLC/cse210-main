<template>
  <div id="login">
    <!-- logo & app name -->
    <div id="top" @click="direct('')">
      <img class="logo" src="../img/logo.png" alt="logo missing" width="80" />
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Login to Roomie</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div class="input">
        <label>Enter email</label>
        <input class="field" type="text" v-model="email" />
        <div class="invalid" v-show="isEmailFail">Invalid Email</div>
      </div>
      <br /><br />
      <!-- password -->
      <div class="input">
        <div id="QA">
          <label>Password</label>
          <router-link to="/forget">Forgot password?</router-link>
        </div>
        <input class="field" type="text" v-model="password" />
        <div class="invalid" v-show="isPwdFail">Incorrect password</div>
      </div>
      <br /><br />
      <!-- login button -->
      <button id="submit" @click="login()">Log in</button>
      <br /><br />
      <!-- new user -->
      <div id="new_user">
        <div id="QA">
          <label>New to Roomie?</label>
          <router-link to="/signup">Create an account</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      isEmailFail: false,
      isPwdFail: false,
    };
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/verifyUser", data)
        .then(function (response) {
          if (response.status == 200) {
            tempThis.$store.commit("setUser", tempThis.email);
            tempThis.$router.push("/");
          }
        })
        .catch(function (err) {
          // console.log(err.status);
          if (err.response) {
            // Request made and server responded
            tempThis.isEmailFail = true;
            console.log("server responded");
          } else if (err.response.status == 401){
            tempThis.isPwdFail = true;
            console.log("server responded");
          } else if (err.request) {
            //The request was made but no response was received
            console.log("network error");
          } else {
            console.log(err);
          }
        });
    },
    direct(target) {
      this.$router.push("/" + target);
    },
  },
};
</script>
