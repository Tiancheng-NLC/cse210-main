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
      <button>Search</button>
      &nbsp;
      <button>Roommate Finder</button>
    </div>
    <!-- center section -->
    <div id="center_header" @click="direct('')">
      <img class="roomie-logo" src="../img/logo.png" alt="logo missing" />
      <!-- <span class="app_name"> Roomie</span> -->
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     loggedIn: this.$store.getters.isLoggedIn,
  //   };
  // },
  computed: {
    loggedIn() {
      var log = this.$store.getters.isLoggedIn;
      return log;
      // console.log(log);
      // console.log(localStorage.getItem("login"));
      // if (log == true) {
      //   console.log("first");
      //   localStorage.setItem("login", "true");
      //   return log;
      // } else {
      //   if (localStorage.getItem("login") == "true") {
      //     this.$store.commit("setLoggedIn", "loggedin");
      //     console.log("second");
      //     return log;
      //   } else {
      //     console.log("third");
      //     return log;
      //   }
      // }
    },
  },

  methods: {
    logout() {
      this.$store.commit("setUser", null);
      this.$store.commit("setLoggedIn", null);
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
  height: 12vh;
}
#left_header {
  float: left;
  padding-top: 2.5vh;
}
#center_header {
  width: 15%;
  margin: 0px auto;
  padding-top: auto;
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
  width: 66px;
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
