<template>
  <div id="reset">
    <h3>Reset password</h3>
    <div id="box">
      <div id="password">
        Password
        <br />
        <input type="text" v-model="password" />
      </div>
      <br /><br />
      <button id="submit" @click="reset()">Reset</button>
    </div>
  </div>
</template>

<script>
// import instance from "../axios";
export default {
  data() {
    return {
      password: "",
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
