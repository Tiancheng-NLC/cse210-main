<template>
  <div id="header">
    this is header
    <br />
    <router-link to="/login">login</router-link>
    <br />
    <router-link to="/signup">signup</router-link>
    <br />
    <router-link to="/forget">forget-password</router-link>
    <br />
    <router-link to="/reset">reset-password</router-link>
    <br />
    <router-link to="/">home</router-link>
    <!-- <router-view /> -->
  </div>
</template>

<style scope>
body {
  margin: 0px;
}
#header {
  background-color: greenyellow;
  width: 100%;
  text-align: center;
}
</style>
