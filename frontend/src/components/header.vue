<template>
  <div id="header">
    <!-- right section -->
    <div id="right_header">
      <button @click="direct('login')">login</button>
      &nbsp;&nbsp;
      <button @click="direct('signup')">signup</button>
    </div>
    <!-- left section -->
    <div id="left_header">
      <button>Search</button>
      &nbsp;
      <button>Roommate Finder</button>
      &nbsp;
      <button>Lease Verifier</button>
    </div>
    <!-- center section -->
    <div id="center_header" @click="direct('')">
      <img class="logo" src="../img/logo.png" alt="logo missing" />
      <span class="app_name"> Roomie</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    direct(target) {
      this.$router.push("/" + target);
    },
  },
};
</script>

<style scoped>
body {
  margin: 0px;
}
#header {
  /* background-color: #69b99d; */
  width: 100%;
  overflow: hidden;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 2.5vh;
  height: 12vh;
}
#left_header {
  float: left;
}
#center_header {
  width: 15%;
  margin: 0px auto;
}
#right_header {
  float: right;
}
.logo {
  width: 66px;
  height: auto;
}
.app_name {
  color: #69b99d;
  font-size: x-large;
  font-weight: bold;
}
button {
  background-color: #fff;
  border: none;
  border-radius: 12px;
  font-size: x-large;
}
button:hover {
  background-color: #69b99d;
}
</style>
