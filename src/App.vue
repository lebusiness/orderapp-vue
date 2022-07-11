<template>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>

<script>
import Header from "./components/templates/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/templates/Footer.vue";

export default {
  name: 'App',
  components: {
    Header, Main, Footer,
  }
}
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

</style>