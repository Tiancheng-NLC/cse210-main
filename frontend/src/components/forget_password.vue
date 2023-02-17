<template>
  <div id="forget">
    <!-- logo & app name -->
    <div id="top" @click="direct('')">
      <img class="logo" src="../img/logo.png" alt="logo missing" width="80" />
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Find my Password</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div class="input">
        Enter your email address to reset password
        <input class="field" type="text" v-model="email" />
        <div class="invalid" v-show="isEmailFail">Invalid Email</div>
      </div>
      <br /><br />
      <button id="submit" @click="forget()">Send</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      isEmailFail: false,
    };
  },
  methods: {
    forget(){
       const data = {
        email: this.email
      };
      var tempThis = this;
      axios
          .post("http://localhost:8080/api/forgotPassword", "", {headers: {
            "email": this.email,
          }})
          .then(function (response) {
            console.log(response);
            tempThis.$router.push("/");
          })
          .catch(function (err) {
            if (err.response.status == 419) {
              // Request made and server responded
              tempThis.isEmailFail = true;
              console.log("server responded");
            } else if (err.response.status == 500) {
              // Request made and server responded
              tempThis.isEmailFail = true;
              console.log("server responded");
            }
            else if (err.request) {
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
