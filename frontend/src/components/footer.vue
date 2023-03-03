<template>
  <div id="footer">
    <!-- right section -->
    <div id="right_footer">
      <router-link to="/privacy_policy" style="text-decoration: none; color: inherit;">Privacy & Policy</router-link>
      &nbsp; &nbsp;&nbsp; &nbsp;
      <router-link to="/terms_conditions" style="text-decoration: none; color: inherit;">Terms & Conditions</router-link>
    </div>
    <!-- left section -->
    <div id="left_footer">
      <router-link to="/contact_us" style="text-decoration: none; color: inherit;">Contact Us</router-link>
      &nbsp; &nbsp;&nbsp; &nbsp;
      <router-link to="/about_us" style="text-decoration: none; color: inherit;">About Us</router-link>
    </div>
  </div>
</template>

<style scoped>
#footer {
  background-color: rgba(211, 211, 211,0.5);
  width: 100%;
  height: 22px;
  padding-left: 50px;
  padding-right: 50px;
  position: sticky;
  bottom: 0;
}
#left_footer {
  float: left;
}
#right_footer {
  float: right;
}
</style>
