<template>
  <div>
    <toolbar placement="static" type="default">
      <!-- Brand as slot -->
      <router-link :to="{ name: 'index' }" title="Home" slot="brand" class="navbar-brand">Vuety Loops</router-link>
      <slot>
        <router-link :to="{ name: 'drums' }" tag="li"><a href="#">Drums</a></router-link>
        <router-link :to="{ name: 'synth' }" tag="li"><a href="#">Synth</a></router-link>
      </slot>
    </toolbar>
    <div class="container-fluid">
      <nuxt/>
    </div>
  </div>
</template>
<script>
  const Toolbar = () => import('~/components/Toolbar.vue' /* webpackChunkName: "shared" */)
  export default {
    name: 'default',
    components: {
      Toolbar
    },
    data () {
      return {
      }
    }
  }
</script>
<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button {
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &.dark-orange {
    border: 1px solid #FFB031;
    color: #FFB031;
    &:hover {
      color: #1d1d1d;
      background-color: #FFB031;
    }
  }
  &.light-orange {
    border: 1px solid #FEFC19;
    color: #FEFC19;
    &.filled {
      color: #1d1d1d;
      background-color: #FEFC19;
      &:hover {
        background-color: transparent;
        color: #FEFC19;
      }
    }
    &:hover {
      color: #1d1d1d;
      background-color: #FEFC19;
    }
  }
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
