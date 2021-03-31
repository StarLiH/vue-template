<template>
  <div id="box">
    <home></home>
  </div>
</template>

<script>
import Home from './views/Home/Home.vue'
  export default{
  name:'App',
  components: {
    Home
    }
  }
</script>

<style>
@import './assets/css/base.css';
@import './assets/fontawesome/css/all.css';
</style>
