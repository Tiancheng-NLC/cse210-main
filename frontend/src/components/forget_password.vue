<template>
  <div id="forget">
    <!-- logo & app name -->
    <div id="top">
      <img src="../img/logo.png" alt="logo missing" />
      <h2>Roomie</h2>
    </div>
    <!-- title -->
    <h3>Find my Password</h3>
    <!-- main box -->
    <div id="box">
      <!-- email -->
      <div id="email">
        Enter your email address to reset password
        <br />
        <input type="text" v-model="email" />
      </div>
      <br /><br />
      <button id="submit" @click="forget()">
        <router-link to="/reset">Send</router-link>
      </button>
    </div>
  </div>
</template>

<script>
// import instance from "../axios";
export default {
  data() {
    return {
      email: "",
    };
  },
  //   methods: {
  //     login() {
  //       alert("good");
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
#forget {
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
