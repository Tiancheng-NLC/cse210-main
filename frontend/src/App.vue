<template>
  <div>
    <Header
      v-if="
        this.$route.path !== '/login' &&
        this.$route.path !== '/signup' &&
        this.$route.path !== '/otp_signup' &&
        this.$route.path !== '/otp_forgot_password' &&
        this.$route.path !== '/forgot' &&
        this.$route.path !== '/reset' &&
        this.$route.path !== '/profile'
      "
    />
    <router-view></router-view>
    <Footer
      v-if="
        this.$route.path !== '/login' &&
        this.$route.path !== '/signup' &&
        this.$route.path !== '/otp_signup' &&
        this.$route.path !== '/otp_forgot_password' &&
        this.$route.path !== '/forgot' &&
        this.$route.path !== '/reset' &&
        this.$route.path !== '/profile'
      "
    />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>
