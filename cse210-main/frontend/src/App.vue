<template>
  <div>
    <Header />
    <router-link to="/login" v-if="this.$route.path !== '/login'"
      >login</router-link
    >
    <br />
    <router-link to="/signup" v-if="this.$route.path !== '/signup'"
      >signup</router-link
    >
    <br />
    <router-link to="/" v-if="this.$route.path !== '/'">home</router-link>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped></style>
