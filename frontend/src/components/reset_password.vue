<template>
  <div id="reset">
    <!-- logo & app name -->
    <div id="top">
      <img class="logo" src="../img/logo.png" alt="logo missing" width="80"/>
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Reset Password</h3>
    <!-- main box -->
    <div id="box">
      <!-- current password -->
      <div id="input">
        <label>Please enter current password</label>
        <input class="field" type="text" v-model="cur_pwd" />
      </div>
      <br /><br />
      <!-- new password -->
      <div id="input">
        <label>Enter a new password</label>
        <input class="field" type="text" v-model="password" />
      </div>
      <br /><br />
      <!-- confirm new password -->
      <div id="input">
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
      cur_pwd: "",
      password: "",
    };
  },
  //   methods: {
  //     login() {
  //       const data = {
  //         email: this.username,
  //         password: this.password,
  //       };
  //       var tempThis = this;
  //     },
  //   },
};
</script>
