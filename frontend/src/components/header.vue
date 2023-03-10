<template>
  <div id="header">
    <!-- right section -->
    <div id="right_header">
      <!-- if NOT logged in -->
      <div v-if="!loggedIn">
        <button @click="direct('login')">login</button>
        &nbsp;&nbsp;
        <button @click="direct('signup')">signup</button>
      </div>
      <!-- if logged in -->
      <div v-else id="dropdown">
        <div @click="toggleProfile()">
          <img class="logo" src="../img/profile.png" alt="logo missing" />
        </div>
        <div id="profile_dropdown">
          <br />
          <span @click="direct('profile')">Edit profile</span>
          <br /><br />
          <span @click="direct('reset')">Reset password</span>
          <br /><br />
          <span @click="logout()">Log out</span>
        </div>
      </div>
    </div>
    <!-- left section -->
    <div id="left_header">
      <button @click="direct('')">Search</button>&nbsp;&nbsp; &nbsp;
      <button @click="direct('connections')">Connections</button>
    </div>
    <!-- center section -->
    <div id="center_header" @click="direct('')">
      <img class="roomie-logo" src="../img/logo.png" alt="logo missing" />
      <!-- <span class="app_name"> Roomie</span> -->
    </div>
  </div>
</template>

<script>
window.onclick = function (e) {
  if (!e.target.matches(".logo")) {
    var DROPDOWN = document.getElementById("profile_dropdown");
    if (DROPDOWN && DROPDOWN.style.visibility == "visible") {
      DROPDOWN.style.visibility = "hidden";
    }
  }
};
export default {
  computed: {
    loggedIn() {
      var temp = this;
      // check if now logged in
      var log = temp.$store.getters.isLoggedIn;
      // once user logged in, we update local storage, whenever they refresh, they should be logged in(unless they click logout)
      if (log == true) {
        // loclastorage will help keep logged in
        localStorage.setItem("user", temp.$store.getters.getUser);
        localStorage.setItem("otp", temp.$store.getters.getOTP);
        localStorage.setItem("pwd", temp.$store.getters.getPassword);
        localStorage.setItem("login", "true");
        return true;
      } else {
        // if now refresh, vuex will refresh, but local storage was set to "true" and will set vuex variables accordingly
        if (localStorage.getItem("login") == "true") {
          var user = localStorage.getItem("user");
          var otp = localStorage.getItem("otp");
          var pwd = localStorage.getItem("pwd");
          this.$store.commit("setLoggedIn", "loggedin");
          this.$store.commit("setUser", user);
          this.$store.commit("setPassword", pwd);
          this.$store.commit("setOTP", otp);
          return true;
        } else {
          // if never logged in, vuex and localstorage will never make user logged in
          return false;
        }
      }
    },
  },

  methods: {
    logout() {
      this.$store.commit("setUser", null);
      this.$store.commit("setLoggedIn", null);
      localStorage.setItem("login", null);
      localStorage.setItem("user", null);
      localStorage.setItem("otp", null);
      localStorage.setItem("pwd", null);
      this.direct("");
    },
    direct(target) {
      this.$router.push("/" + target);
    },
    toggleProfile() {
      var dropdown = document.getElementById("profile_dropdown");
      if (dropdown.style.visibility !== "visible") {
        dropdown.style.visibility = "visible";
      } else {
        dropdown.style.visibility = "hidden";
      }
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
  height: 13vh;
}
#left_header {
  float: left;
  padding-top: 2.5vh;
}
#center_header {
  width: 15%;
  margin: 0px auto;
}
#right_header {
  float: right;
  padding-top: 2.5vh;
}
#profile_dropdown {
  background-color: #fff;
  overflow: hidden;
  visibility: hidden;
  position: absolute;
  right: 0;
  width: 200px;
  height: auto;
  z-index: 100;
}
.logo {
  width: 56px;
  height: auto;
}
.roomie-logo {
  width: 150px;
  height: auto;
}
.app_name {
  color: #0e7242;
  font-size: xxx-large;
  font-weight: bold;
  font-family: arial;
  padding-top: 0;
  margin-top: 0;
  vertical-align: top;
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
