<template>
  <div>
    hello
    <Header
      v-if="
        this.$route.path !== '/login' &&
        this.$route.path !== '/signup' &&
        this.$route.path !== '/forget' &&
        this.$route.path !== '/reset'
      "
    />
    <router-view></router-view>
    <br />
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
