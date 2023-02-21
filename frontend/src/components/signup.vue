<template>
  <form @submit.prevent="sendMessage">
    <div id="signup">
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
      <h3>Welcome to Roomie!</h3>
      <!-- main box -->
      <div id="box">
        <!-- email -->
        <div class="input">
          <label>Please enter your email address</label>
          <input class="field" type="text" v-model="email" required />
          <div class="invalid" v-if="isAlreadyExist">Email already exists</div>
          <!-- <div ckass="invalid" v-else-if="isWrongEmail">Invalid Email</div> -->
          <div class="invalid" v-else-if="msg.email">{{ msg.email }}</div>
        </div>
        <br /><br />
        <!-- create password -->
        <div class="input">
          <label>Create a password</label>
          <input
            class="field password"
            type="password"
            v-model="password"
            required
          />
          <input type="checkbox" @click="toggle()" />
          <strong>Show Password</strong>
        </div>
        <br /><br />
        <!-- confirm password -->
        <div class="input">
          <label>Confirm your password</label>
          <input
            class="field password"
            type="password"
            v-model="confirm_pwd"
            required
          />
          <div class="invalid" v-show="!pwd_match">
            Two passwords do not match, please check
          </div>
        </div>
        <br /><br />
        <!-- signup button -->
        <button id="submit" @click="sendOTP()">Sign Up</button>
        <br />
        <br />
        <div class="invalid" v-if="serverError" style="color: red">
          Server Error. Please contact roomieorganisation@gmail.com to get
          further help.
        </div>

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
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirm_pwd: "",
      isAlreadyExist: false,
      serverError: false,
      pwd_match: true,
      // isWrongEmail: false,
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
    sendOTP() {
      if (this.password === "" || this.confirm_pwd === "") {
        // passwords empty then do not make API call
        return;
      }
      if (this.password !== this.confirm_pwd) {
        // passwords don't match then don't make API call
        this.pwd_match = false;
        return;
      } else {
        this.pwd_match = true;
      }
      if (this.msg.email !== "") {
        // if invalid email then don't make API call
        console.log("cannot call api");
        return;
      }
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/emailOTP", "", {
          headers: { email: this.email },
        })
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            tempThis.$store.commit("setUser", tempThis.email);
            tempThis.$store.commit("setPassword", tempThis.password);
            tempThis.$store.commit("setOTP", response.data);
            tempThis.$router.push("/otp_signup");
          }
        })
        .catch(function (err) {
          if (err.response.status == 420) {
            // Request made and server responded
            tempThis.isAlreadyExist = true;
            console.log("server responded");
          } else {
            tempThis.isAlreadyExist = false;
            tempThis.serverError = true;
            console.log(err.response);
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
