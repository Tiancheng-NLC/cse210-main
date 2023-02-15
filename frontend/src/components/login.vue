<template>
  <div id="login">
    <!-- logo & app name -->
    <div id="top">
      <img src="../img/logo.png" alt="logo missing" />
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Login to Roomie</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div id="email">
        Email address
        <br />
        <input type="text" v-model="email" />
      </div>
      <br /><br />
      <!-- password -->
      <div id="password">
        Password
        <br />
        <router-link to="/forget">Forget password?</router-link>
        <br />
        <input type="text" v-model="password" />
      </div>
      <br /><br />
      <!-- login button -->
      <button id="submit" @click="login()">Log in</button>
      <br /><br />
      <!-- new user -->
      <div id="new_user">
        New to Roomie?
        <br />
        <router-link to="/signup">Create an account</router-link>
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
        .post("api/verifylogin", data)
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

<style scope>
#login {
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
#new_user {
  margin: auto;
  border: 3px solid green;
  padding: 10px;
}
</style>
