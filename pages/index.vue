<template>
  <section class="container-fluid home">
    <div>
      <logo/>
      <h1 class="title">
        Vuety Loops
      </h1>
      <h2 class="subtitle">
        A browser-based DAW using Nuxt.js
      </h2>
      <div class="links">
        <router-link :to="{ name: 'drums' }" class="button light-orange">Drums</router-link>
        <a href="https://github.com/vuety-loops/vuety-loops" target="_blank" class="button filled light-orange">GitHub</a>
        <router-link :to="{ name: 'synth' }" class="button light-orange">Synth</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'home',
  components: {
    Logo
  }
}
</script>

<style>
.hidden {
  display: none !important;
}
.home {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~/assets/carbon-weave-brown.jpg');
  background-size: cover;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #FFB031;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #FEFC19;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
