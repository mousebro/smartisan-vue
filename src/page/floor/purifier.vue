<template>
    <!--净化器及其配件轮播-->
    <div class="purifierContain">
        <div class="titleWrap">
            <h1>净化器及配件</h1>
            <span class="icont iconfont icon-xiayige"></span>
        </div>
        <div class="swipe-wrapper purifier">
            <mt-swipe :auto="4000" ref="swipeWrapper">
                <mt-swipe-item class="swip-item-1 item">
                    <img src="http://127.0.0.1:3002/img/jhq01.webp" alt="">
                    <h4>畅呼吸智能空气净化器超级除甲醛版</h4>
                    <p>强力除甲醛，就选畅呼吸</p>
                    <p>&yen;<span>3,499.00</span></p>
                </mt-swipe-item>
                <mt-swipe-item class="swip-item-2 item">
                    <img src="http://127.0.0.1:3002/img/jhq02.webp" alt="">
                    <h4>畅呼吸智能空气净化器超级除甲醛版</h4>
                    <p>强力除甲醛，就选畅呼吸</p>
                    <p>&yen;<span>3,499.00</span></p>
                </mt-swipe-item>
                <mt-swipe-item class="swip-item-2 item">
                    <img src="http://127.0.0.1:3002/img/jhq03.webp" alt="">
                    <h4>畅呼吸智能空气净化器超级除甲醛版</h4>
                    <p>强力除甲醛，就选畅呼吸</p>
                    <p>&yen;<span>3,499.00</span></p>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <ul>
            <li>
                <img src="http://127.0.0.1:3002/img/jhq04.webp">
                <span>高效复合滤芯</span>
                <span class="icont iconfont icon-xiayige"></span>
            </li>
            <li>
                <img src="http://127.0.0.1:3002/img/jhq05.webp">
                <span>高效复合滤芯</span>
                <span class="icont iconfont icon-xiayige"></span>
            </li>
            <li>
                <img src="http://127.0.0.1:3002/img/jhq06.webp">
                <span>高效复合滤芯</span>
                <span class="icont iconfont icon-xiayige"></span>
            </li>
            <li>
                <img src="http://127.0.0.1:3002/img/jhq07.webp">
                <span>高效复合滤芯</span>
                <span class="icont iconfont icon-xiayige"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    /*净化器及其配件*/
    .purifierContain{
        box-shadow: 0 0 .5rem #ccc;
        margin-bottom:5rem;
    }
    .purifier{
        height:22rem;
        border-bottom: 1px solid #ddd;
        background: #fafafa;
  
    }
    .purifier img{
        width:65%;
    }
    .titleWrap{
        display: flex;
        justify-content: space-between;
        height:2.5rem;
        line-height: 2.5rem;
        background:#fff;
        padding:0 1rem ;
        border:1px solid #ddd;
    }
    .titleWrap>h1,span{
        font-size:.8rem;
        font-weight:700;
        color:#666;
        text-overflow: ellipsis;
        line-height: 2.5rem;
    }
    .item>h4{
        text-overflow: ellipsis;
        font-size:1rem;
        color:#333;
        white-space: nowrap;
        font-weight:700;
        margin:0;
    }
    .item>p:nth-child(3){
        font-size:.5rem;
        color:#7f7f7f;
        margin:0;
        margin-top:.3rem;
        white-space: nowrap;
        text-overflow: ellipsis;

    }
    .item>p:nth-child(4),span{
        color:#d44d44;
        font-weight:700;
    }
    .purifierContain>ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .purifierContain>ul>li{
        width:50%;
        background:#fafafa;
        text-align:center;
        padding:.3rem 0;
        display: flex;
        justify-content: space-around;
    }
    .purifierContain>ul>li:not(:nth-child(2)):not(:nth-child(1)){
         border-top:1px solid #ddd;
    }   
    .purifierContain>ul>li:not(:nth-child(1)):not(:nth-child(3)){
         border-left:1px solid #ddd;
    }   

    .purifierContain>ul>li>img{
        width:1.8rem;
        height:1.8rem;
        vertical-align: middle;
    }
    .purifierContain>ul>li>span{
        color:#333;
        font-size:.6rem;
        line-height:2rem;
        font-weight:700;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: nowrap;
    }
</style>