<template>
    <div class="addToCartContain">
        <div class="modelContain">
            <div class="modelContain-header">
                <img src="http://127.0.0.1:3002/img/pSpecies01.webp" alt="">
                <div>
                    <h4>坚果特别定制版</h4>
                    <p>炭黑色·6G+64G</p>
                    <p>&yen;1,899.00</p>
                </div>
            </div>
        </div>
        <div class="detaiFooter">
            <div class="iconContain" style="background:url(http://127.0.0.1:3002/img/sCart.png)" >
                <span>9</span>
            </div>
            <div class="buyNow">确认</div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .addToCartContain>.modelContain{
        height:60%;
        width:100%;
        background:#fff;
        position:absolute;
        bottom:4rem;
    }
    .addToCartContain>.modelContain>.modelContain-header{
        display: flex;
        justify-content: space-between;
        padding:1rem;
        background:linear-gradient(to bottom,#fdfdfd,#f6f6f6);
        box-shadow: 0 1px 1rem #808080;
    }
    .addToCartContain>.modelContain>.modelContain-header>img{
        width:30%;
        height:25%;
        margin-top:-2.5rem;
        background:#fff;
        border-radius: .3rem;
    }
    .addToCartContain>.modelContain>.modelContain-header>div{
        width:60%;
        text-align: left;
    }
    .addToCartContain>.modelContain>.modelContain-header>div>h4{
        font-weight:700;
    }
    .addToCartContain>.modelContain>.modelContain-header>div>p:nth-child(2){
        font-size:.6rem;
        color:#7f7f7f;
    }
    .addToCartContain>.modelContain>.modelContain-header>div>p:nth-child(3){
        font-size:1rem;
        color:#d44d44;
        font-weight: 700;
    }
    detaiFooter{
        box-shadow: 0 0 2px #808080;
    }
    .detaiFooter>.iconContain{
        width:3rem;
        height:3rem;
       position: relative;
        background-size:contain !important; 
    }
    .detaiFooter>.iconContain>span{
        position: absolute;
        display: inline-block;
        width:20px;
        height:20px;
        font-size:8px;
        top:-4px;
        right:-4px;
        color:#fff;
        background:#d44d44;
        line-height: 20px;
        border-radius:20px;
    }
    .addToCartContain{
        position: fixed;
        z-index: 100000;
        width: 100%;
        height:100%;
        background:rgba(0,0,0,.8);
        top:0;
        left: 0;
        
    }
    .addToCartContain>.detaiFooter{
        width:100%;
        height:4rem;
        line-height: 4rem;
        position: fixed;
        bottom:0;
        left:0;
        background:#fff;
        box-shadow: 0 0 2rem #ccc;      
    }
    .addToCartContain>.iconContain>span{
        position:relative;
    }
    .addToCartContain>.detaiFooter{
        display: flex;
        justify-content: space-between;
        padding:.5rem;
    }
    .addToCartContain>.detaiFooter>div.buyNow{
        width:80%;
        border:1px solid #f0f0f0;
        line-height:2.5rem;
        font-size:.8rem;
        font-weight:700;
        border-radius:.4rem;
    }
    .addToCartContain>.detaiFooter>div:nth-child(2){
        color:#808080;
       
    }
    .addToCartContain>.detaiFooter>div.buyNow{
        background:linear-gradient(to bottom,#6084ec,#506cbb);
        color:#fff;
    }
</style>