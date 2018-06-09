<template>
  <div id="app">
    <header-app></header-app>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width:30vw;
  height: 70vh;
  border: 1px solid;
  margin:0 auto;
}
</style>
