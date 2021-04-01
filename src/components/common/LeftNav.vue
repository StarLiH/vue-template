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
    left: 20%;
  }
  .map img{
    width: 800px;
  }
  .map span{
    font-size: 90px;
    position: absolute;
    color: rgb(196, 196, 196,0.5)
  }
  .map .m-left{
    top:35%
  }
  .map .m-right{
    top:35%;
    right: 0
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
</style>

<script>
  export default {
    name:'LeftNav',
    data(){
      return {
        index:0,
        timer:{},
        imgArr:[
          require("@/assets/img/00.jpg"),
          require("@/assets/img/01.jpg"),
          require("@/assets/img/02.jpg"),
          require("@/assets/img/03.jpg"),
          require("@/assets/img/04.jpg"),
          require("@/assets/img/05.jpg")
        ]
      }
    },
    methods:{
      //轮播图
      carouselMap:function(){
        let _this=this;
        let imgAll=document.getElementsByTagName("img")[0];
        let allA=document.getElementsByClassName("map-spot")[0].children;
        let leftA=document.getElementsByClassName("left-a")[0];
        let rightA=document.getElementsByClassName("right-a")[0];
        allA[0].style.backgroundColor="rgba(17, 11, 11, 0.5)";
        //点击超链接切换图片
        for(let i=0;i<allA.length;i++){
          allA[i].onclick=function(){
            imgAll.src=_this.imgArr[i];
            for(let i=0 ; i<allA.length ;i++){
              allA[i].style.backgroundColor="";
            };
            allA[i].style.backgroundColor="rgba(17, 11, 11, 0.5)";
            _this.index=i
          }
        };
        //点击左按钮切换
        leftA.onclick=function(){
          _this.index--;
          if(_this.index<0){
            _this.index=5
          }
          imgAll.src=_this.imgArr[_this.index];
          for(let i=0 ; i<allA.length ;i++){
              allA[i].style.backgroundColor="";
            };
          allA[_this.index].style.backgroundColor="rgba(17, 11, 11, 0.5)";
        };
        //点击右按钮切换
        rightA.onclick=function(){
          _this.index++;
          if(_this.index>5){
            _this.index=0
          }
          imgAll.src=_this.imgArr[_this.index];
          for(let i=0 ; i<allA.length ;i++){
              allA[i].style.backgroundColor="";
            };
          allA[_this.index].style.backgroundColor="rgba(17, 11, 11, 0.5)";
        };
        //自动切换图片
        function play(){
          _this.timer=setInterval(function(){
            _this.index++;
            _this.index %= _this.imgArr.length
            imgAll.src=_this.imgArr[_this.index]
            for(let i=0 ; i<allA.length ;i++){
              allA[i].style.backgroundColor="";
            };
            allA[_this.index].style.backgroundColor="rgba(17, 11, 11, 0.5)";
          },2000);
        }
        play();
        imgAll.onmouseout=function(){
          play()
        }
        imgAll.onmouseover=function(){
          clearInterval(_this.timer)
        }
      }
    },
    mounted(){
      this.carouselMap();
    }
  }
</script>
