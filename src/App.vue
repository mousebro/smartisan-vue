<template>
  <div id="app">
    <router-view ></router-view>
    <footer>
      <nav class="mui-bar mui-bar-tab footer-mui">
          <a id="defaultTab" class="mui-tab-item mui-active" href="tab-webview-subpage-about.html">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </a>
          <a class="mui-tab-item" href="tab-webview-subpage-chat.html">
            <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">消息</span>
          </a>
          <a class="mui-tab-item" href="tab-webview-subpage-contact.html">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">通讯录</span>
          </a>
          <a class="mui-tab-item" href="tab-webview-subpage-setting.html">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">设置</span>
          </a>
      </nav>
    </footer>
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
  background: #1d1d1d;
}
body{
  overflow: scroll;
  overflow-x: hidden;
}
</style>
