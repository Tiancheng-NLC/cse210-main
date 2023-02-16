<template>
  <div>
    <Header
      v-if="
        this.$route.path !== '/login' &&
        this.$route.path !== '/signup' &&
        this.$route.path !== '/forget' &&
        this.$route.path !== '/reset'
      "
    />
    <router-view></router-view>
    <Footer
      v-if="
        this.$route.path !== '/login' &&
        this.$route.path !== '/signup' &&
        this.$route.path !== '/forget' &&
        this.$route.path !== '/reset'
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
