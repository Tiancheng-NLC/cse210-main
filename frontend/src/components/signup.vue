<template>
  <div id="signup">
    <!-- logo & app name -->
    <div id="top">
      <img src="../img/logo.png" alt="logo missing" />
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Welcome to Roomie!</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div id="email">
        Please enter your email address
        <br />
        <input type="text" v-model="email" />
      </div>
      <br /><br />
      <!-- create password -->
      <div id="password">
        Create a password
        <br />
        <input type="text" v-model="password" />
      </div>
      <br /><br />
      <!-- confirm password -->
      <div id="confirm_password">
        Confirm your password
        <br />
        <input type="text" />
      </div>
      <br /><br />
      <!-- signup button -->
      <button id="submit" @click="signup()">Sign up</button>
      <!-- existed user -->
      <div id="old_user">
        Already have an account?
        <br />
        <router-link to="/login">login</router-link>
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
    signup() {
      const data = {
        email: this.email,
        password: this.password,
      };
      var tempThis = this;
      axios
        .post("http://localhost:5173/api/signup", data)
        .then(function (response) {
          console.log(response);
          // if(status code is 200){
          //   do something
          // }
          // tempThis.$router.push("/");
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style scope>
#signup {
  text-align: center;
  height: 100%;
  width: 100%;
}
#box {
  width: 50%;
  margin: auto;
  border: 3px solid green;
  padding: 10px;
}
#submit {
  background-color: green;
  color: aliceblue;
}
#old_user {
  margin: auto;
  border: 3px solid green;
  padding: 10px;
}
</style>
