<template>
  <div id="reset">
    <!-- logo & app name -->
    <div id="top" @click="direct('')">
      <img class="logo" src="../img/logo.png" alt="logo missing" width="80" />
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Reset Password</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div class="input">
        <label>Please enter your email address</label>
        <input class="field" type="text" v-model="email" />
      </div>
      <br /><br />
      <!-- new password -->
      <div class="input">
        <label>Enter a new password</label>
        <input class="field" type="text" v-model="password" />
      </div>
      <br /><br />
      <!-- confirm new password -->
      <div class="input">
        <label>Confirm your new password</label>
        <input class="field" type="text" />
      </div>
      <br /><br />
      <!-- reset button -->
      <button id="submit" @click="reset()">Reset</button>
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
    reset() {
      const data = {
        email: this.email,
        password: this.password,
      };
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/updateUser", data)
        .then(function (response) {
          console.log(response);
          // if(response.status == 200){
          //   alert
          // }

          // tempThis.$router.push("/");
        })
        .catch(function (err) {
          if (err.response.status == 419) {
              // Request made and server responded
              tempThis.isEmailFail = true;
              console.log("server responded");
            } else if (err.request) {
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
