<template>
  <div id="app">
    <router-view ></router-view>

  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
@import "assets/reset.scss";
@import "assets/common.scss";
@import './assets/iconfont/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav.footer-mui{
  z-index:200;
 
}
nav.mui-bar>a.mui-active{
  color:#333 !important;
  font-weight:700;
}
body{
  overflow: scroll;
  overflow-x: hidden;
}
</style>
