<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">动画</router-link> |
      <router-link to="/about">布局</router-link> |
      <router-link to="/three">组件</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style>
@import './assets/css/reset.css';
@import './assets/fontawesome/css/all.css';

#nav{
  min-width: 1000px;
  height: 50px;
  line-height: 50px;
  background-color: aqua;
}

</style>
