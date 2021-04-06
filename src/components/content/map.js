//轮播图
export function carouselMap() {
  let index=0;
  let timer={};
  let imgArr=[
    require("@/assets/img/00.jpg"),
    require("@/assets/img/01.jpg"),
    require("@/assets/img/02.jpg"),
    require("@/assets/img/03.jpg"),
    require("@/assets/img/04.jpg"),
    require("@/assets/img/05.jpg")
  ];
  let imgAll = document.getElementsByTagName("img")[0];
  let allA = document.getElementsByClassName("map-spot")[0].children;
  let leftA = document.getElementsByClassName("left-a")[0];
  let rightA = document.getElementsByClassName("right-a")[0];
  allA[index].style.backgroundColor = "rgba(17, 11, 11, 0.5)";
  //点击超链接切换图片
  for (let i = 0; i < allA.length; i++) {
    allA[i].onclick = function () {
      imgAll.src =imgArr[i];
      for (let i = 0; i < allA.length; i++) {
        allA[i].style.backgroundColor = "";
      };
      allA[i].style.backgroundColor = "rgba(17, 11, 11, 0.5)";
      imgAll.classList.add("appear");
      setTimeout(function () {
        imgAll.classList.remove("appear");
      }, 1000)
      index = i
    }
  };
  //点击左按钮切换
  leftA.onclick = function () {
    index--;
    if (index < 0) {
      index = 5
    }
    imgAll.src = imgArr[index];
    for (let i = 0; i < allA.length; i++) {
      allA[i].style.backgroundColor = "";
    };
    allA[index].style.backgroundColor = "rgba(17, 11, 11, 0.5)";
    imgAll.classList.add("appear");
    setTimeout(function () {
      imgAll.classList.remove("appear");
    }, 1000)
  };
  //点击右按钮切换
  rightA.onclick = function () {
    index++;
    if (index > 5) {
      index = 0
    }
    imgAll.src = imgArr[index];
    for (let i = 0; i < allA.length; i++) {
      allA[i].style.backgroundColor = "";
    };
    allA[index].style.backgroundColor = "rgba(17, 11, 11, 0.5)";
    imgAll.classList.add("appear");
    setTimeout(function () {
      imgAll.classList.remove("appear");
    }, 1000)
  };
  //自动切换图片
  function play() {
    timer = setInterval(function () {
      index++;
      index %= imgArr.length
      imgAll.src = imgArr[index]
      for (let i = 0; i < allA.length; i++) {
        allA[i].style.backgroundColor = "";
      };
      allA[index].style.backgroundColor = "rgba(17, 11, 11, 0.5)";
      imgAll.classList.add("appear");
      setTimeout(function () {
        imgAll.classList.remove("appear");
      }, 1000)
    }, 2000);
  }
  play();
  imgAll.onmouseout = function () {
    play()
  }
  imgAll.onmouseover = function () {
    clearInterval(timer)
  }
}