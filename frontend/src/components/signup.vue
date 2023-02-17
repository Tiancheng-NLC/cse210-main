<template>
  <div id="signup">
    <!-- logo & app name -->
    <div id="top" @click="direct('')">
      <img class="logo" src="../img/logo.png" alt="logo missing" width="80" />
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Welcome to Roomie!</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div class="input">
        <label>Please enter your email address</label>
        <input class="field" type="text" v-model="email" />
        <div class="invalid" v-if="isAlreadyExist">Email already exists</div>
        <div ckass="invalid" v-else-if="isWrongEmail">Invalid Email</div>
        <div class="invalid" v-else-if="msg.email">{{ msg.email }}</div>
      </div>
      <br /><br />
      <!-- create password -->
      <div class="input">
        <label>Create a password</label>
        <input class="field" type="text" v-model="password" />
      </div>
      <br /><br />
      <!-- confirm password -->
      <div class="input">
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
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      isAlreadyExist: false,
      isWrongEmail: false,
      msg: [],
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    }
  },
  methods: {
    signup() {
      const data = {
        email: this.email,
        password: this.password,
      };
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/createUser", data)
        .then(function (response) {
          console.log(response);
          // if(status code is 200){
          //   do something
          // }
          // tempThis.$router.push("/");
        })
        .catch(function (err) {
          if (err.response.status == 420) {
            // Request made and server responded
            tempThis.isAlreadyExist = true;
            console.log("server responded");
          } else if (err.response.status == 500){
            tempThis.isAlreadyExist = false;
            tempThis.isWrongEmail = true;
            console.log(err.response);
          } else {
            console.log(err.response)
          }
        });
    },
    validateEmail(value){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      {
        this.msg['email'] = '';
      } else{
        this.msg['email'] = 'Please enter a valid email address';
      } 
    },
    direct(target) {
      this.$router.push("/" + target);
    },
  },
};
</script>
