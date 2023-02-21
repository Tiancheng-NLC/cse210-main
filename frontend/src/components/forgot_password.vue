<template>
  <form @submit.prevent="sendMessage">
    <div id="forgot">
      <!-- logo & app name -->
      <div id="top">
        <img
          @click="direct('')"
          class="logo"
          src="../img/logo.png"
          alt="logo missing"
          width="150"
        />
      </div>
      <!-- title -->
      <h3>Find my Password</h3>
      <!-- main box -->
      <div id="box">
        <!-- email -->
        <div class="input">
          <label>Please enter your email address registered with Roomie</label>
          <input class="field" type="text" v-model="email" required />
          <div class="invalid" v-if="isEmailFail">
            Provided email is not registered with Roomie
          </div>
          <div class="invalid" v-else-if="msg.email">{{ msg.email }}</div>
        </div>
        <br /><br />
        <button id="submit" @click="forgot()">Send</button>
        <br /><br />
        <div class="invalid" v-if="serverError" style="color: red">
          Server Error. Please contact roomieorganisation@gmail.com to get
          further help.
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
      isEmailFail: false,
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
    forgot() {
      const data = {
        email: this.email,
      };
      var tempThis = this;
      if (this.msg.email !== "") {
        console.log("Invalid Email; Cannot Call API");
        return;
      }
      axios
        .post("http://localhost:8080/api/forgotPassword", "", {
          headers: {
            email: this.email,
          },
        })
        .then(function (response) {
          if (response.status == 200) {
            tempThis.$store.commit("setUser", tempThis.email);
            tempThis.$store.commit("setOTP", response.data);
            tempThis.$router.push("/otp_forgot_password");
          }
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
          } else {
            console.log("server error");
            tempThis.serverError = true;
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
  },
};
</script>
