<template>
    <div>
        <header-box :scrib="scrib"></header-box>
        <ul class="header-tag">
            <li class="active">商品</li>
            <li>详情</li>
            <li>参数</li>
            <li>推荐</li>
        </ul>
        <div class="productDetail">
            <div class="picContain">
                <img src="http://127.0.0.1:3002/img/d01.webp" alt="">
            </div>
            <!--商品信息-->
            <div class="mui-card pDetails">
				<div class="mui-card-header">商品信息</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <h4>坚果Pro2 特别版</h4>
                        <p>QuaIcomm 骁龙 636 八核处理器 1200万 +500万像素双摄像头，3500mAh大电池·18W快速充电·人脸解锁+指纹解锁</p>
                        <span>&yen;1,899.00</span>
					</div>
				</div>
				<div class="mui-card-footer">
                    <p>优惠信息</p>
                    <span class="maskYellow">买赠</span><span>购买Pro2特别版赠送价值49元保护套</span>
                </div>
            </div>
            <!--已选版本-->
            <div class="mui-card pDetails">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <h4>已选版本</h4>
                        <div>
                            <div>
                                <p>颜色：<span>炭黑色</span></p>
                                <p>容量：<span>6G+64G</span></p>
                                <p>数量：<span>1</span></p>
                            </div>
                            <span class="mui-icon mui-icon-forward"></span>
                        </div>
					</div>
				</div>
            </div>
            <!--商品详情-->
            <div class="mui-card pDetails pDetailsImg">
                <div class="mui-card-header">商品详情</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <img v-for="img in imgList" v-lazy="img.url" alt="" :key="img.id">
                    </div>
                </div>

            </div>
            <div class="mui-card pDetails technical">
                <div class="mui-card-header">技术参数</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <h4>容量和内存</h4>
                        <ul>
                            <li v-for="i in test" :key="i.id">
                                <p>4+32版</p>
                                <p>4GB内存</p>
                                <p>32GB机身内存</p>
                                <p>支持扩展存储卡</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--相关推荐-->
            <product-list-box :proTitle="proTitle2" :productL="productL"></product-list-box>
        </div>
        <div class="detaiFooter">
                <div class="iconContain" style="background:url(http://127.0.0.1:3002/img/sCart.png)" >
                    <span>9</span>
                </div>
            <div class="addToCart" @click="addToCart">加入购物车</div>
            <div class="buyNow">现在购买</div>
        </div>
        <add-to-cart></add-to-cart>
    </div>
</template>
<script>
    import addToCart from "./addToCart.vue"
    import productL from "./../floor/productL.vue"
    import pHeader from "./plistHeader.vue"
    export default {
        data(){
            return{
             pid:"",
             title:"" ,
             scrib:{title:"",router:"/phoneList"},
             imgList:[
                {id:1,url:"http://127.0.0.1:3002/img/d02.webp"},
                {id:2,url:"http://127.0.0.1:3002/img/d03.webp"},
                {id:3,url:"http://127.0.0.1:3002/img/d04.webp"},
                {id:4,url:"http://127.0.0.1:3002/img/d05.webp"},
                {id:5,url:"http://127.0.0.1:3002/img/d06.webp"},
                {id:6,url:"http://127.0.0.1:3002/img/d07.webp"},
                {id:7,url:"http://127.0.0.1:3002/img/d08.webp"},
                {id:8,url:"http://127.0.0.1:3002/img/d09.webp"},
                {id:9,url:"http://127.0.0.1:3002/img/d10.webp"},
                {id:10,url:"http://127.0.0.1:3002/img/d11.webp"},
                {id:11,url:"http://127.0.0.1:3002/img/d12.webp"},
                {id:12,url:"http://127.0.0.1:3002/img/d13.webp"},
                {id:13,url:"http://127.0.0.1:3002/img/d14.webp"},
             ],
             test:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}],
             productL:[{id:1,title:"坚果Pro 2S",scrib:"双系统无限屏",price:"1,998.00",imgUrl:"http://127.0.0.1:3002/img/pro05.webp",color:"maskRed",msg:"买赠"},
             {id:2,title:"坚果Pro 2S TPU软胶手机套",scrib:"经典配色，质感精良",price:"49.00",imgUrl:"http://127.0.0.1:3002/img/pro06.webp",color:"",msg:""},
             {id:3,title:"坚果Pro 2S TPU软胶手机套",scrib:"经典配色，质感精良",price:"29.00",imgUrl:"http://127.0.0.1:3002/img/pro09.webp",color:"",msg:""},
             {id:4,title:"坚果砖式蓝牙小音箱",scrib:"一款设计出色，音质出众的随身音箱",price:"1,49.00",imgUrl:"http://127.0.0.1:3002/img/pro07.webp",color:"",msg:""},
             {id:5,title:"坚果彩虹数据线",scrib:"七彩随机发货",price:"19.00",imgUrl:"http://127.0.0.1:3002/img/pro08.webp",color:"",msg:""},
             {id:6,title:"坚果蓝牙小白耳机",scrib:"一副干净的蓝牙耳机",price:"99.00",imgUrl:"http://127.0.0.1:3002/img/pro10.webp",color:"maskYellow",msg:"直减"}
             ],
             proTitle2:"相关推荐",  
            }
        },
        methods:{
            addToCart(){
               
            }
        },
        created() {
            var req=this.$route.query
            this.pid = req.pid;
            this.scrib.title=req.title;
        },
        components:{
            "header-box":pHeader,
            "product-list-box": productL,
            "add-to-cart":addToCart
        }
    }
</script>
<style scoped>
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
    .detaiFooter{
        width:100%;
        height:4rem;
        line-height: 4rem;
        position: fixed;
        bottom:0;
        left:0;
        background:#fff;
    }
    .iconContain>span{
        position:relative;
    }
    .detaiFooter{
        display: flex;
        justify-content: space-between;
        padding:.5rem;
    }
    .detaiFooter>div:not(:first-child){
        width:40%;
        border:1px solid #f0f0f0;
        line-height:3rem;
        font-size:.8rem;
        font-weight:700;
        border-radius:.4rem;
    }
    .detaiFooter>div:nth-child(2){
        color:#808080;
       
    }
    .detaiFooter>div:nth-child(3){
        background:linear-gradient(to bottom,#6084ec,#506cbb);
        color:#fff;
    }
    ul.header-tag{
        padding:.5rem;
        background:#fff;
        position:fixed;
        width:100%;
        top:40px;
        left:0;
        box-shadow: 0 0 1rem #ccc;
        z-index:130;
    }
        
    .header-tag>li{
        float:left;
        font-size:.6rem;
        color:#808080;
        width:25%;
        border:1px solid #ddd;
        padding:.3rem;
    }
    .header-tag>li:not(:first-child){
        border-left:0;
    }
    .header-tag>li.active{
        background:#808080;
        color:#fff;
    }
    div.productDetail{
        margin-top:5.6rem;
        margin-bottom:4rem;
    }
    /*商品信息*/
    .productDetail>.picContain{
        margin-bottom:.5rem;
    }
    .productDetail>.picContain>img{
        width:100%;
        background:#fff;
    }
    .productDetail>.mui-card{
        margin:0;
    }
    .productDetail .mui-card-content>.mui-card-content-inner{
        text-align:left;
    }

    .pDetails>.mui-card-header{
        font-size:.8rem;
        font-weight:700;
    }
    .mui-card-content>.mui-card-content-inner>h4{
        font-size:.8rem;
        font-weight:700;
    }
    .mui-card-content>.mui-card-content-inner>p{
        font-size:.6rem;
    }
    .mui-card-content>.mui-card-content-inner>span{
        color:red;
        font-weight:700;
    }
    .maskYellow{
        line-height:0;
        display: inline-block;
        padding:.5rem .6rem;
        border-radius:.4rem;
        color:#e6b217;
        background:#fffbe5;
        font-size:.6rem;
        border:1px solid #ffe57a;
    }
    .pDetails>.mui-card-footer{
        display: inline-block;
        width:100%;
        text-align:left;
    }
    .pDetails>.mui-card-footer>p{
        font-size:.6rem;
    }
    .pDetails>.mui-card-footer>span:nth-child(2){
        margin-right:1rem;
    }
    .pDetails>.mui-card-footer>span:last-child{
        font-size:.6rem;
    }
    /*已选版本*/
    .productDetail>.pDetails{
        margin-bottom:.5rem;
    }
    .productDetail>.pDetails>.mui-card-content>.mui-card-content-inner>div{
        display:flex;
        justify-content: space-between;
    }
    .productDetail>.pDetails>.mui-card-content>.mui-card-content-inner>div>span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size:1rem;        
        font-weight:700;
    }
    .productDetail>.pDetails>.mui-card-content>.mui-card-content-inner>h4{
        color:#808080;
        font-size:.6rem;
    }
    .productDetail>.pDetails>.mui-card-content>.mui-card-content-inner>div>div>p{
        margin-bottom:0;
        color:#484646;
        font-size:.6rem;
    }
    .productDetail>.pDetails>.mui-card-content>.mui-card-content-inner>div>div>p>span{
        font-weight:700;
    }
    .pDetailsImg>.mui-card-content>.mui-card-content-inner{
        padding: 0;
        padding-top:3rem;
    }
    .pDetailsImg>.mui-card-content>.mui-card-content-inner>img{
        width:100%;
        float: left;
    }   

    /*技术参数*/
    .technical{
        padding:1rem;
    }
    .technical>.mui-card-content>.mui-card-content-inner>h4{
        color:#808080;
        font-size:.6rem;
        margin-bottom:.5rem;
    }
    .technical>.mui-card-content>.mui-card-content-inner>ul>li>p:not(:first-child){
        margin-bottom:0;
        font-size:.6rem;
    }
    header-box{
        z-index: 999;
    }
</style>