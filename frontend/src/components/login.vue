<template>
  <div id="login">
    <h3>Login to Roomies</h3>
    <div id="box">
      <div id="email">
        Email address
        <br />
        <input type="text" v-model="email" />
      </div>

      <br /><br />
      <div id="password">
        Password
        <br />
        <input type="text" v-model="password" />
      </div>
      <br /><br />
      <button id="submit" @click="login()">Log in</button>
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
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      var tempThis = this;
      axios
        .post("api/verifylogin", data)
        .then(function (response) {
          console.log(response);
          // if(status code is 200){
          //   do something
          // }
          tempThis.$router.push("/");
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style scope>
#login {
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
