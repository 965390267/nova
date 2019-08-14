<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <alert></alert>
  </div>
</template>

<script>
import Alert from '@/components/alert.vue'
export default {
  name: 'App',
  components:{
Alert
  },mounted() {
//  this.bus.$emit('loading',true)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
