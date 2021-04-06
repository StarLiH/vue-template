<template>
  <div id="nav">
    <div class="map">
      <a class="left-a" href="javascript:;"><span class="fas m-left">&#xf104;</span></a>
      <a class="right-a" href="javascript:;"><span class="fas m-right">&#xf105;</span></a>
      <img src="@/assets/img/00.jpg" alt="轮播图">
      <div class="map-spot">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>
    </div>
  </div>
</template>

<style>
  #nav{
    width: 1300px;
    height: 1000px;
    background-color: aqua;
    margin: 10px auto;
    position: relative;
  }
  .map{
    position: absolute;
    left: 150px;
  }
  .map img{
    width: 1000px;
  }
  .map span{
    font-size: 90px;
    position: absolute;
    color: rgb(196, 196, 196,0.5)
  }
  .map .m-left{
    top:35%;
    z-index: 100;
  }
  .map .m-right{
    top:35%;
    right: 0;
    z-index: 100;
  }
  .map span:hover{
    color: rgba(233, 231, 231, 0.8)
  }
  .map .map-spot{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  .map .map-spot a{
    border-radius: 50%;
    margin: 0 5px;
    float: left;
    width: 15px;
    height: 15px;
    background-color: rgba(252, 251, 251,0.5);
  }
  .map .map-spot a:hover{
    background-color: rgba(17, 11, 11, 0.5);
  }
  .appear{
    animation: moveB 1s 0s 1;
  }
  @keyframes moveB {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script>
import {carouselMap} from 'components/content/map'
  export default {
    name:'LeftNav',
    data(){
      return {
        Map:carouselMap
      }
    },
    methods:{
      
    },
    mounted(){
      this.Map()
    }
  }
</script>
