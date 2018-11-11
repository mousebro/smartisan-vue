<template>
    <div class="productList">
        <div class="titleWrap">
            <h1>{{proTitle}}</h1>
            <span class="icont iconfont icon-xiayige"></span>
        </div>
        <div class="prodListC">
            <ul>
                <li v-for="item in productL " :key="item.id">
                    <div class="imageContain">
                        <span :class="item.color">{{item.msg}}</span>
                        <img v-lazy="item.imgUrl" alt="">
                    </div>
                    <div class="itemContent">
                        <h4>{{item.title}}</h4>
                        <p>{{item.scrib}}</p>
                        <p class="price">&yen;{{item.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props:["productL","proTitle"]
    }
</script>
<style scoped>
    .productList{
        margin:.5rem 0;
        background:#fff;
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
    .prodListC>ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding:0 1rem;
    }
    .prodListC>ul>li{
        width:45%;
    }

    .prodListC>ul>li>div>img{
        width:100%;
        
    }
    .prodListC>ul>li>.itemContent>h4{
        text-overflow: ellipsis;
        font-size:.6rem;
        color:#333;
        white-space: nowrap;
        font-weight:700;
        margin:0;
    }
    .prodListC>ul>li>.itemContent>p:nth-child(2){
        font-size:.5rem;
        color:#7f7f7f;
        margin:0;
        margin-top:.3rem;
        white-space: nowrap;
        text-overflow: ellipsis;

    }
    .prodListC>ul>li>.itemContent>p:nth-child(3){
        color:#d44d44;
        font-weight:700;
    }
    .prodListC>ul>li>.imageContain{
        position:relative;
    }
    .prodListC>ul>li>div:first-child{
        margin-top:1rem;
        border:1px solid #ddd;
        min-height:11rem;
    }
    .prodListC>ul>li>div:last-child{
        text-align:left;
        margin-top:1rem;
    }
    .prodListC>ul>li>div>.maskRed{
        line-height:0;
        display: inline-block;
        padding:.5rem .6rem;
        border-radius:.4rem;
        color:#cc3e39;
        background:#ffe7e5;
        border:1px solid #f0948d;
        position:absolute;
        top:.3rem;
        left:.1rem;
    
        font-size:.3rem;
    }
    .prodListC>ul>li>div>.maskYellow{
        line-height:0;
        display: inline-block;
        padding:.5rem .6rem;
        border-radius:.4rem;
        color:#e6b217;
        background:#fffbe5;
        border:1px solid#ffe57a;
        position:absolute;
        top:.3rem;
        left:.1rem;

        font-size:.3rem;
    }
    .prodListC>ul>li>div img[lazy="loading"]{
        width:100%;

    }
    .itemContent p{
        overflow:hidden;
        text-overflow: ellipsis;
    }
</style>