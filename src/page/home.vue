<template>
    <div class="home-contain">
        <div class="title-bar-contain">
            <header-box></header-box>
            <div class="swipe-wrapper">
                <mt-swipe :auto="4000" ref="swipeWrapper">
                    <mt-swipe-item class="swip-item-1 item">
                        <img src="http://127.0.0.1:3002/img/banner1.png" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item class="swip-item-2 item">
                        <img src="http://127.0.0.1:3002/img/banner03.png" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="short-cut-container">
                <ul>
                    <li @click="toPhonelist">
                        <img src="http://127.0.0.1:3002/img/cut01.png">
                        <p>手机</p>
                    </li>
                    <li>
                        <img src="http://127.0.0.1:3002/img/cut02.png">
                        <p>空气净化</p>
                    </li>
                    <li>
                        <img src="http://127.0.0.1:3002/img/cut3.png">
                        <p>官方配件</p>
                    </li>
                    <li>
                        <img src="http://127.0.0.1:3002/img/cut04.png">
                        <p>品牌周边</p>
                    </li>
                    <li>
                        <img src="http://127.0.0.1:3002/img/cut05.png">
                        <p>以旧换新</p>
                    </li>
                </ul> 
            </div>

        </div>
         <slide-box :list="list" :Floor="Floor1" :index="0"></slide-box>
        <div class="mui-card title-bar-contain ">
				<div class="mui-card-header">11月20日&nbsp;限时秒杀</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <img src="http://127.0.0.1:3002/img/earphone.webp" alt="">
                        <h4>S1001 圈铁耳机</h4>
                        <p>及简造型，复合振膜</p>
                        <p><span>￥109.00</span> &nbsp;<del>￥199.00</del></p>
					</div>
				</div>
        </div>
        <div class="mui-card title-bar-contain">
				<div class="mui-card-content">
					<div class="mui-card-content-inner mui-card-floor2">
                        <ul>
                            <li>
                                <img src="http://127.0.0.1:3002/img/pro01.webp" alt="">
                                <img src="http://127.0.0.1:3002/img/pro03.webp" alt="">
                                <img src="http://127.0.0.1:3002/img/pro02.webp" alt="">
                            </li>
                            <li>
                                <img src="http://127.0.0.1:3002/img/product01.webp" alt="">
                            </li>
                        </ul>
					</div>
                </div>
        </div>
        <product-list :proTitle="proTitle" :productL="productL"></product-list>
       <slide-box :list="list" :Floor="Floor2" :index="1"></slide-box>
        <product-list :proTitle="proTitle2" :productL="productL"></product-list>
        <product-list :proTitle="proTitle3" :productL="productL"></product-list>
        <!--净化器及其配件轮播-->
        <purifier-box></purifier-box>
        <footer-box></footer-box>
    </div>
</template>
<script>
    import slideP from "./floor/slideP.vue"
    import productL from "./floor/productL.vue"
    import purifier from "./floor/purifier.vue"
    import headerBox from "./../components/headerContainer.vue"
    import footerBox from "./../components/footerContainer.vue"
    export default {
        data(){
            return{
                list:[
                    {id:1,tagColor:"color-tag-red",msg:"买赠",imgUrl:"http://127.0.0.1:3002/img/prolist01.webp",title:"坚果Pro2S",subTitle:"双系统，无限屏",price:"1,798.00",oldPrice:""},
                    {id:2,tagColor:"color-tag-yellow color-tag-red",msg:"直降",imgUrl:"http://127.0.0.1:3002/img/prolist02.webp",title:"坚果R1",subTitle:"次世代旗舰手机",price:"1,798.00",oldPrice:"￥3,499.00"},
                    {id:3,tagColor:"",msg:"",imgUrl:"http://127.0.0.1:3002/img/prolist03.webp",title:"坚果Pro2S",subTitle:"双系统，无限屏",price:"1,798.00",oldPrice:""},
                    {id:4,tagColor:"color-tag-red",msg:"买赠",imgUrl:"http://127.0.0.1:3002/img/prolist04.webp",title:"坚果Pro2S",subTitle:"双系统，无限屏",price:"1,798.00",oldPrice:""},
                    {id:5,tagColor:"",msg:"",imgUrl:"http://127.0.0.1:3002/img/prolist03.webp",title:"坚果Pro2S",subTitle:"双系统，无限屏",price:"1,798.00",oldPrice:""},
                    {id:6,tagColor:"color-tag-red",msg:"买赠",imgUrl:"http://127.0.0.1:3002/img/prolist04.webp",title:"坚果Pro2S",subTitle:"双系统，无限屏",price:"1,798.00",oldPrice:""},
                    {id:7,tagColor:"",msg:"",imgUrl:"http://127.0.0.1:3002/img/prolist05.webp",title:"坚果Pro2S",subTitle:"双系统，无限屏",price:"1,798.00",oldPrice:""},
                    {id:8,tagColor:"color-tag-red",msg:"买赠",imgUrl:"http://127.0.0.1:3002/img/prolist01.webp",title:"坚果Pro2S",subTitle:"双系统，无限屏",price:"1,798.00",oldPrice:""}
                ],
                productL:[{id:1,title:"坚果Pro 2S",scrib:"双系统无限屏",price:"1,998.00",imgUrl:"http://127.0.0.1:3002/img/pro05.webp",color:"maskRed",msg:"买赠"},
                {id:2,title:"坚果Pro 2S TPU软胶手机套",scrib:"经典配色，质感精良",price:"49.00",imgUrl:"http://127.0.0.1:3002/img/pro06.webp",color:"",msg:""},
                {id:3,title:"坚果Pro 2S TPU软胶手机套",scrib:"经典配色，质感精良",price:"29.00",imgUrl:"http://127.0.0.1:3002/img/pro09.webp",color:"",msg:""},
                {id:4,title:"坚果砖式蓝牙小音箱",scrib:"一款设计出色，音质出众的随身音箱",price:"1,49.00",imgUrl:"http://127.0.0.1:3002/img/pro07.webp",color:"",msg:""},
                {id:5,title:"坚果彩虹数据线",scrib:"七彩随机发货",price:"19.00",imgUrl:"http://127.0.0.1:3002/img/pro08.webp",color:"",msg:""},
                {id:6,title:"坚果蓝牙小白耳机",scrib:"一副干净的蓝牙耳机",price:"99.00",imgUrl:"http://127.0.0.1:3002/img/pro10.webp",color:"maskYellow",msg:"直减"}
                ],
                proTitle:"新品首发",
                Floor1:"热销商品",
                Floor2:"坚果Pro2S ”足迹“ 系列保护套",
                proTitle2:"坚果系列手机及配件",
                proTitle3:"官方配件"
            }
          
        },
        methods:{
            toPhonelist(){
                this.$router.push("/phonelist")
            }
        },
        components:{
            "slide-box":slideP,
            "product-list":productL,
            "purifier-box":purifier,
            "header-box":headerBox,
            "footer-box":footerBox
            
        }
    }
</script>
<style scoped>
    .home-contain{
        box-sizing: border-box;
        width:100%;
    }
   /*头部*/ 
    
    .swipe-wrapper{
        height:10rem;
        margin-top:5rem;
        
    }
    .swipe-wrapper img{
        width:100%;
        padding:.3rem 1rem;
    }
    .short-cut-container>ul{
        display: flex;
        justify-content: space-around;
    }
    .short-cut-container>ul>li{
        float:left;
    }
    .short-cut-container>ul>li>img{
        width:2rem;
    }
    

    /*二楼*/
    .mui-card{
        margin:.5rem 0;
    }
    .mui-card-content-inner>img{
        width:21.875rem;
    }
    .mui-card-content-inner>h4{
        word-break: break-word;
        font-size:.8rem;
        color:#333;
        white-space: nowrap;
        font-weight:700;
    }
    .mui-card-content-inner>p:nth-child(3){
        font-size:12px;
    }
    .mui-card-content-inner>p:nth-child(4)>span{
        color:#d44d44;
        font-weight:700;
    }
    .mui-card-content-inner>p:nth-child(4)>del{
        font-size:8px;
    }
    .mui-card-content .mui-card-floor2>ul{
        display: flex;        
    }
    .mui-card-content .mui-card-floor2>ul>li img{
        width:10rem;
    }

</style>