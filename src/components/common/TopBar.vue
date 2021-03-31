<template>
  <div id="top" class="clearfix">
    <ul id="top-left" >
      <li>
        <span class="fas">&#xf015;</span>
        首页
      </li>
      <li>
        <span class="fas">&#xf03e;</span>
        动画
      </li>
      <li>
        <span class="fas">&#xf085;</span>
        组件
      </li>
      <li>
        <span class="fas">&#xf005;</span>
        样式
      </li>
    </ul>
    <ul id="top-right">
      <li><a href="#">登录&nbsp;/&nbsp;注册</a></li>
    </ul>
  </div>
</template>

<style>
  #top {
    min-width: 1500px;
    background-color: #cbcfce;
    box-shadow: #b6b5b5 5px 3px 10px;
    line-height: 50px;
  }
  #top li{
    float: left;
    margin: 0 30px;
  }
  #top-left{
    float: left;
    margin-left: 50px;
  }
  #top-right{
    float: right;
    margin-right: 100px;
  }
  #top-right a{
    color: black;
  }
</style>

<script>
export default {
  name:'TopBar'
}
</script>
