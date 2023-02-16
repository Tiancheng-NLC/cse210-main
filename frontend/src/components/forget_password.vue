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
        <label class="invalid" v-show="isInvalidEmail">Invalid Email</label>
      </div>
      <br /><br />
      <button id="submit" @click="forget()">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      isInvalidEmail: false,
    };
  },
  methods: {
    forget(){
       const data = {
        email: this.email
      };
      axios
          .post("http://localhost:5173/api/verifyUser", data)
          .then(function (response) {
            console.log(response);
            tempThis.$router.push("/");
          })
          .catch(function (err) {
            if (err.response) {
              this.isInvalidEmail = true;
              console.log(error.response.status);
              console.log(error.response.headers);
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
