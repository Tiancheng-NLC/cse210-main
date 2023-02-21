<template>
  <form @submit.prevent="sendMessage">   
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
        <input class="field" type="text" v-model="email" required/>
        <div class="invalid" v-show="isEmailFail">Provided email is not registered with Roomie</div>
        <div class="invalid" v-if="msg.email">{{ msg.email }}</div>
      </div>
      <br /><br />
      <!-- password -->
      <div class="input">
        <div id="QA">
          <label>Password</label>
          <router-link to="/forgot">Forgot password?</router-link>
        </div>
        <input class="field" id="password" type="password" v-model="password" required/>
        <input type="checkbox" @click="toggle()" />
        <strong>Show Password</strong>
        <div class="invalid" v-show="isPwdFail">Incorrect password</div>
      </div>
      <br /><br />
      <!-- login button -->
      <button id="submit" @click="login()">Log in</button>
      <br /><br />
      <div class="invalid" v-if="serverError" style="color:red;">Server Error. Please contact roomieorganisation@gmail.com to get further help.</div>
      <!-- new user -->
      <div id="new_user">
        <div id="QA">
          <label>New to Roomie?</label>
          <router-link to="/signup">Create an account</router-link>
        </div>
      </div>
    </div>
  </div>
  </form>
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
      serverError: false,
      msg: [],
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
  },
  methods: {
    login() {
      if(this.password === ""){ // password empty then do not make API call
        return;
      }
      if (this.msg.email !== "") { // if invalid email then don't make API call
        console.log("cannot call api");
        return;
      }
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
            tempThis.$store.commit("setLoggedIn", "loggedIn"); // just needs a non-null value input
            tempThis.$router.push("/");
          }
        })
        .catch(function (err) {
          // console.log(err.status);
          if (err.response.status == 419) {
            // Request made and server responded
            tempThis.isEmailFail = true;
            console.log("server responded");
          } else if (err.response.status == 401) {
            tempThis.isEmailFail = false;
            tempThis.isPwdFail = true;
            console.log("server responded");
          } else {
            tempThis.serverError = true;
            console.log("server error")
          }
        });
    },
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Please enter a valid email address";
      }
    },
    direct(target) {
      this.$router.push("/" + target);
    },
    toggle() {
      var temp = document.getElementById("password");
      if (temp.type === "password") {
        temp.type = "text";
      } else {
        temp.type = "password";
      }
    },
  },
};
</script>
