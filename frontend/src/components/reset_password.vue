<template>
  <div id="reset">
    <!-- logo & app name -->
    <div id="top">
      <img src="../img/logo.png" alt="logo missing" />
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Reset Password</h3>
    <!-- main box -->
    <div id="box">
      <!-- current password -->
      <div id="cur_pwd">
        Please enter current password
        <br />
        <input type="text" v-model="cur_pwd" />
      </div>
      <br /><br />
      <!-- new password -->
      <div id="password">
        Enter a new password
        <br />
        <input type="text" v-model="password" />
      </div>
      <br /><br />
      <!-- confirm new password -->
      <div id="confirm_password">
        Confirm your new password
        <br />
        <input type="text" />
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

<style scope>
#reset {
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
</style>
