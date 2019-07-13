<template>
  <div id="app">
<router-view></router-view>
  </div>
</template>

<script>
import Home from "./pages/Home";
import Vue from "vue/dist/vue.esm.js";
export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
</style>
