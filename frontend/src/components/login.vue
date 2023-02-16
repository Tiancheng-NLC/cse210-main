<template>
  <div id="login">
    <!-- logo & app name -->
    <div id="top">
      <img class="logo" src="../img/logo.png" alt="logo missing" width="80"/>
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Login to Roomie</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div id="input">
        <label>Enter email</label>
        <input class="field" type="text" v-model="email">
      </div>
      <br /><br />
      <!-- password -->
      <div id="input">
        <div id="QA">
          <label>Password</label>
          <router-link to="/forget">Forget password?</router-link>
        </div>
        <input class="field" type="text" v-model="password" />
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
        .post("http://localhost:5173/api/verifylogin", data)
        .then(function (response) {
          console.log(response);
          // if(status code is 200){
          //   do something
          // }
          tempThis.$router.push("/");
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>
