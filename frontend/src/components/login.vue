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
        <label class="invalid" v-show="isLoginFail">Invalid Email</label>
      </div>
      <br /><br />
      <!-- password -->
      <div class="input">
        <div id="QA">
          <label>Password</label>
          <router-link to="/forget">Forgot password?</router-link>
        </div>
        <input class="field" type="text" v-model="password" />
        <label class="invalid" v-show="isLoginFail">Incorrect password</label>
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
      isLoginFail: false,
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
        .post("http://localhost:5173/api/verifyUser", data)
        .then(function (response) {
          console.log(response);
          tempThis.$router.push("/");
        })
        .catch(function (err) {
          if (err.response) {
            // Request made and server responded
            this.isLoginFail = true;
            console.log(error.response.status);
            console.log(error.response.headers);
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
