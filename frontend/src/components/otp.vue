<template>
  <div id="otp">
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
        <label>Please enter your OTP</label>
        <input class="field" type="text" v-model="otp" />
        <div class="invalid" v-show="incorrectOTP">Incorrect OTP</div>
        <div class="resent" v-show="resentOTP">Resent OTP</div>
      </div>
      <br />
      <!-- resent OTP button -->
      <button id="submit" @click="sendOTP()">Resend OTP</button>
      <!-- signup button -->
      <br/> <br/>
      <button id="submit" @click="signUp()">Submit</button>
      <br /><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      otp: this.otp,
      incorrectOTP: false,
      resentOTP: false,
    };
  },
  methods: {
    signUp() {
      var tempThis = this;
      tempThis.resentOTP = false;
      const data = {
        email: tempThis.$store.state.user,
        password: tempThis.$store.state.password,
      };
      if(this.otp == tempThis.$store.state.otp){
        axios
        .post("http://localhost:8080/api/createUser", data)
        .then(function (response) {
          if (response.status == 200) {
            tempThis.$store.commit("setLoggedIn", tempThis.email);
            tempThis.$router.push("/");
          }
        })
        .catch(function (err) {
          if (err.response.status == 420) {
            // Request made and server responded
            console.log("server responded");
          }
        });
      } else{
        tempThis.incorrectOTP = true;
      }
    },
    direct(target) {
      this.$router.push("/" + target);
    },
    sendOTP() {
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/emailOTP", "", {headers: {"email" : tempThis.$store.state.user}})
        .then(function (response) {
          if(response.status == 200){
            tempThis.$store.commit("setOTP", response.data);
          }
        })
        .catch(function (err) {
          if (err.response.status == 420) {
            // Request made and server responded
            tempThis.isAlreadyExist = true;
            console.log("server responded");
          }
        });
        tempThis.resentOTP = true;
    }
  },
};
</script>
