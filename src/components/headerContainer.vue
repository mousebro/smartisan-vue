<template>
    <div class="headerContain">
      <h1 class="title-bar">
          <a class="nav-toggle icont iconfont icon-icon-menu" @click="AddB"></a>
          <a class="nav-logo"></a>
          <a class="nav-search icont iconfont icon-icon-search"></a>
      </h1>
      <div class="maskContain" @click="AddB">
          <ul>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                    <span class="mui-tab-label">锤子科技商城</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-phone"></span>
                    <span class="mui-tab-label">坚果Pro2s</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-calc"></span>
                    <span class="mui-tab-label">坚果R1</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span>
                    <span class="mui-tab-label">坚果TNT工作站</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-classroom"></span>
                    <span class="mui-tab-label">坚果3</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-express"></span>
                    <span class="mui-tab-label">坚果pro</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span>
                    <span class="mui-tab-label">Smatisan OS</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-grech"></span>
                    <span class="mui-tab-label">应用</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-university"></span>
                    <span class="mui-tab-label">论坛</span>
              </li>
              <li>
                    <span class="mui-icon mui-icon-extra mui-icon-extra-custom"></span>
                    <span class="mui-tab-label">服务支持</span>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
  export default {
    data(){
        return {
            Cstatus:false
        }
    },
    methods:{
        AddB(){
            var mask = document.getElementsByClassName("maskContain")[0]
            var titleBar = document.getElementsByClassName("title-bar")[0]
            var Wheight=window.innerHeight-titleBar.offsetHeight
            if(this.Cstatus){
                mask.style.height=Wheight+"px"
                this.Cstatus = false
            }else{
                mask.style.height=0+"px"
                this.Cstatus = true
            }
        }
    }
 }

</script>
<style scoped>
 .maskContain{
     height:0;
     width: 100%;
     overflow: hidden;
     background:rgba(0,0,0,.8);
     transition: height .3s linear;
 }
 .maskContain>ul{
     display:flex;
     justify-content: flex-start;
     flex-wrap: wrap;
 }
 .maskContain>ul>li{
     display: flex;
     flex-direction: column;
     width:24%;
     margin-top:1rem;
 }
 .maskContain>ul>li>span{
     color:#fff;
     font-size:2rem;
 }
 .maskContain>ul>li>span:last-child{
     font-size:8px;
 }
  .title-bar-contain{
    background:#fff;
    box-shadow: 0 5px 13px rgb(228, 228, 228);
    padding-bottom:1rem;
    margin-bottom:.5rem;
   border:1px solid #ddd;
   position: relative;
}
.headerContain{
    position:fixed;
    width:100%;
    z-index: 1000;
    top:0;
    left:0;
}
.title-bar{
    width:100%;
    display: flex;
    background: #1d1d1d;
    justify-content: space-between;
    line-height:2rem;
    margin:0;
}
.title-bar>a{
    color:#fff;
    display: inline-block;
    padding:1.1rem;
}
.title-bar>a:nth-child(2){
    display: inline-block;
    background:url(http://127.0.0.1:3002/img/logo.png) no-repeat  0 .9rem;
    background-size:cover;
    width:3rem;
}
</style>