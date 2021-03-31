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
        allA[_this.index].style.backgroundColor="rgba(17, 11, 11, 0.5)";
        //点击超链接切换图片
        for(let i=0;i<allA.length;i++){
          allA[i].onclick=function(){
            _this.index=i;
            imgAll.src=_this.imgArr[i];
            for(let i=0 ; i<allA.length ;i++){
              allA[i].style.backgroundColor="";
            };
            allA[i].style.backgroundColor="rgba(17, 11, 11, 0.5)";
          }
        };
      },
      leftSwitch:function(){
        let _this=this;
        let leftA=document.getElementsByClassName("left-a")[0];
        let imgAll=document.getElementsByTagName("img")[0];
        let allA=document.getElementsByClassName("map-spot")[0].children;
        let index = allA.length;
        leftA.onclick=function(){
          let i = index-1;
          imgAll.src=_this.imgArr[i];
        }
      }
    },
    mounted(){
      this.carouselMap();
      this.leftSwitch();
    }
  }
</script>
