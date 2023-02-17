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
      <!-- new password -->
      <div class="input">
        <label>Enter a new password</label>
        <input class="field password" type="password" v-model="password" />
        <input type="checkbox" @click="toggle()" />
        <strong>Show Password</strong>
      </div>
      <br /><br />
      <!-- confirm new password -->
      <div class="input">
        <label>Confirm your new password</label>
        <input class="field password" type="password" v-model="confirm_pwd" />
        <div class="invalid" v-show="!pwd_match">
          Two passwords do not match, please check
        </div>
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
      confirm_pwd: "",
      pwd_match: true,
      msg: [],
    };
  },
  methods: {
    reset() {
      if (this.password !== this.confirm_pwd) {
        this.pwd_match = false;
        return;
      }
      var tempThis = this;
      const data = {
        email: tempThis.$store.state.user,
        password: this.password,
      };
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/updateUser", data)
        .then(function (response) {
          if (response.status == 200) {
            // tempThis.$store.commit("setUser", );
            tempThis.$router.push("/");
          }
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
    toggle() {
      var temp = document.getElementsByClassName("password");
      for (var i = 0; i < temp.length; i++) {
        if (temp[i].type === "password") {
          temp[i].type = "text";
        } else {
          temp[i].type = "password";
        }
      }
    },
  },
};
</script>
