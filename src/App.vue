<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view  v-cloak/>
   
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{

  },
  methods:{

  },
  mounted() {
 
  },
}
</script>

<style>
[v-cloak]{
  display: none;
}
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
