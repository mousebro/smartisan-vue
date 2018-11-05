<template>
    <div class="personalContain">
        <mt-header fixed title="我" class='headerContainer'></mt-header>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">北京-Item 1</a>
            </li>
        </ul>
        <div class="person_info">
            <a><img src="http://127.0.0.1:3000/img/muwu.jpg"></a>
            <div>
                <h3>你的昵称</h3>
                <div>
                    <span>添加职位</span>@<span>添加公司</span>
                </div>
            </div>
            <span class="mui-icon mui-icon-arrowright"></span>
        </div>
        <ul class="itemsList list-first">
            <li>
                <span><i  class="mui-icon mui-icon-extra mui-icon-extra-notice"></i>消息中心</span>
                <span></span>
            </li>
            <li>
                <span><i class="mui-icon mui-icon-extra mui-icon-extra-like"></i>我赞过的</span>
                <span>24篇</span>
            </li>
            <li>
                <span><i class="mui-icon mui-icon-star"></i>收藏集</span>
                <span>4个</span>
            </li>
            <li>
                <span><i  class="mui-icon-extra mui-icon-extra-cart"></i>已购小册</span>
                <span>0本</span>
            </li>
            <li>
                
                <span><i class="mui-icon mui-icon-eye"></i> 阅读过的文章</span>
                <span>557篇</span>
            </li>
            <li>
                <span> <i class="mui-icon mui-icon-paperclip"></i>标签管理</span>
                <span>46个</span>
            </li>
        </ul>
        <ul class="itemsList list-last">
            <li>
                <span> <i class="mui-icon-extra mui-icon-extra-lamp"></i>夜间模式</span>
                <div :class="`${turn==true?'divTurnNight':''}`" @click.stop.prevent="turnBtn">
                    <span :class="`${turn==true?'turnNight':''}`"></span>
                </div>
            </li>
            <li>
                <span> <i class="mui-icon mui-icon-email"></i>意见反馈</span>
            </li>
            <li>
                <span> <i class="mui-icon mui-icon-gear"></i>设置</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"personalContain",
        data(){
            return{
                turn:true
            }
        },
        methods:{
            turnBtn(){
                this.turn =!this.turn;
            }
        }
    }
</script>
<style scoped>
    
    .person_info{
        display:flex;
        justify-content:space-between;
        padding:.5rem 1rem;
        margin:.5rem 0;
        background:#fff;
    }
    .person_info>a{
        display:inline-block;
        width:3rem;
        height:3rem;
        border-radius:1.5rem;
        overflow:hidden;
    }
    .person_info>a>img{
        width:100%;
        height:100%;
    }
    .person_info>div{
        margin-left:-7rem;
    }
    .person_info>div>h3{
        font-size:1rem;
        font-weight:bold;
        text-align:left;
    }
    .person_info>div>div{
        font-size:.8rem;
    }
    .person_info>span.mui-icon{
        line-height:200% ;
    }
    .personalContain>ul.itemsList{
        margin:1rem 0;
        padding:0;
    }
    .personalContain>ul.itemsList>li{
        display:flex;
        justify-content:space-between;
        padding:.5rem 1rem;
        border-bottom:1px solid #ddd;
        background:#fff;
    }
    .personalContain>ul.itemsList>li>span{
        text-align:left;
        font-size:.8rem;
    }
    .personalContain>ul.itemsList>li>span>i{
        margin-right:1.2rem;
    }
    .personalContain>ul.itemsList>li>span>i:first-child:before{
    }
    ul.list-first>li:nth-child(5) i.mui-icon-eye:before{
        color:#808080;
    }
    ul.list-first>li:nth-child(2) i.mui-icon-extra-like:before {
        color:#808080;
    }
    .personalContain>ul.list-last>li:first-child>div{
        width:3rem;
        height:1.3rem;
        border-radius:1rem;
        background:#808080;
        margin:auto 0;
        position:relative;
    }
    .personalContain>ul.list-last>li:first-child>div>span{
        display:block;
        position:absolute;
        width:1.5rem;
        height:1.5rem;
        border-radius:2rem;
        top:-.11rem;
        left:0;
        background:#fff;
        z-index:10;
        box-shadow: 0 0 .2rem  #808080;
        transition:left .3s linear;
    }
    .personalContain>ul.list-last>li:first-child>div>span.turnNight{
        left:1.5rem;
    }
    .personalContain>ul.list-last>li:first-child>div.divTurnNight{
        background:#26a2ff;
    }
</style>