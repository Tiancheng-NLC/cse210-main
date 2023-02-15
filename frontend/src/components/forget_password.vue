<template>
  <div id="forget">
    <h3>Find password</h3>
    <div id="box">
      <div id="email">
        Enter your email address to reset password
        <br />
        <input type="text" v-model="email" />
      </div>
      <br /><br />
      <button id="submit" @click="forget()">Send</button>
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
