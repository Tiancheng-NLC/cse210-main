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
      var tempThis = this;
      const data = {
        email: tempThis.$store.state.user,
        password: this.password,
      };

      axios
        .post("http://localhost:8080/api/updateUser", data)
        .then(function (response) {
          if (response.status == 200) {
            // tempThis.$store.commit("setUser", );
            tempThis.$router.push("/");
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    direct(target) {
      this.$router.push("/" + target);
    },
  },
};
</script>
