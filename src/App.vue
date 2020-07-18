<template>
  <div id="app">
    <Nav />
    <div id="app-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue';
import Nav from './shared/Navigation.vue';
import Footer from './shared/Footer.vue';

export default Vue.extend({
  components: {
    Home,
    Nav,
    Footer,
  },
});

</script>


<style lang="scss">
  @import '@/styles/base.scss';
  @import 'assets/fonts/Lato/stylesheet.css';

  #app {
    font-family: Lato;
    @include flex(column, flex-start, center);
    flex: 1 0 auto;
    min-height: 93vmin;
    width: 100%;
    background: $background;
    #app-content {
      @include flex(column, flex-start, center);
      flex: 1 0 auto;
      height: 100%;
      min-height: 100%;
      
      width: 90%;
    }
  }
</style>
