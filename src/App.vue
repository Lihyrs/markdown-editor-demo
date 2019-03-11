<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'highlight.js/styles/dark.css';

export default {
    name: 'app',
};
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  width:100%;
  height:100%;
}

body {
  width:100%;
  height:100%;
}
</style>
