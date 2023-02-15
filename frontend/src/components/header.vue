<template>
  <div id="header">
    <div id="left">
      <router-link to="/login">login</router-link>
      <br />
      <router-link to="/signup">signup</router-link>
      <br />
      <router-link to="/forget">forget-password</router-link>
      <br />
      <router-link to="/reset">reset-password</router-link>
      <br />
    </div>
    this is header
    <br />
    <router-link to="/">home</router-link>
  </div>
</template>

<style scope>
body {
  margin: 0px;
}
#header {
  background-color: #69b99d;
  width: 100%;
  text-align: center;
}
#left {
  float: left;
}
</style>
