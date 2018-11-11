<template>
        <div class="personalContain">
            <mt-header title="购物车"  class="personHeader"></mt-header>
            <div class="shoppingCartain">
                <div class="cartUserUnlogin" v-if="this.islogin">
                    <img src="http://127.0.0.1:3002/img/sCart.png" alt="">
                    <h4>购物车暂无商品</h4>
                    <p>添加购物车的商品将会显示在这里</p>
                    <div class="btnContain">
                        <button type="button" @click="toLogin">登陆</button>
                        <button type="button">现在选购</button>
                    </div>
                </div>
                <div class="cartUserislogin" v-else>
                <div class="mui-card">
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner personServerContain">

                            </div>
                        </div>
                    </div>
                    <product-list :proTitle="proTitle" :productL="productL"></product-list>
                </div>
            </div>
            <footer-box></footer-box>
        </div>
    </template>
    <script>
        import productL from "./floor/productL.vue"
        import footerBox from "./../components/footerContainer.vue"
       
        export default {
            data(){
                return{
                    islogin:false,
                    proTitle:"相关推荐",
                    productL:[{id:1,title:"坚果Pro 2S",scrib:"双系统无限屏",price:"1,998.00",imgUrl:"http://127.0.0.1:3002/img/pro05.webp",color:"maskRed",msg:"买赠"},
                {id:2,title:"坚果Pro 2S TPU软胶手机套",scrib:"经典配色，质感精良",price:"49.00",imgUrl:"http://127.0.0.1:3002/img/pro06.webp",color:"",msg:""},
                {id:3,title:"坚果Pro 2S TPU软胶手机套",scrib:"经典配色，质感精良",price:"29.00",imgUrl:"http://127.0.0.1:3002/img/pro09.webp",color:"",msg:""},
                {id:4,title:"坚果砖式蓝牙小音箱",scrib:"一款设计出色，音质出众的随身音箱",price:"1,49.00",imgUrl:"http://127.0.0.1:3002/img/pro07.webp",color:"",msg:""},
                {id:5,title:"坚果彩虹数据线",scrib:"七彩随机发货",price:"19.00",imgUrl:"http://127.0.0.1:3002/img/pro08.webp",color:"",msg:""},
                {id:6,title:"坚果蓝牙小白耳机",scrib:"一副干净的蓝牙耳机",price:"99.00",imgUrl:"http://127.0.0.1:3002/img/pro10.webp",color:"maskYellow",msg:"直减"}
                ]
                }
            },
            components :{
                "footer-box" :footerBox,
                "product-list":productL
            },
            methods:{
                toLogin(){
                    //this.$router.push("/login");
                    
                }

            },
            created() {
                this.islogin=!this.$store.state.islogin
            },
            mounted() {
                document.getElementsByClassName("shoppingCartain")[0].style.height = window.innerHeight + "px";
                 
            }  
        }
    </script>
    <style scoped>
        .cartUserislogin>.cartUserislogin{
            margin-top:10rem;
        }
        .shoppingCartain{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content:center;
            flex-direction: column;
        }

        .shoppingCartain>.cartUserUnlogin>h4,p{
            color:#d5d5d5;
        }
        .shoppingCartain>.cartUserUnlogin>.btnContain{
            display: flex;
            justify-content: center;
            
        }
        .shoppingCartain>.cartUserUnlogin>.btnContain>button{
            width: 45%;
            padding: .5rem 0;
            border-radius: .2rem;
            font-size:.5rem;
        }
        .shoppingCartain>.cartUserUnlogin>.btnContain>button:first-child{
            margin-right: .2rem;
            background:linear-gradient(to top,#0062cc,#26a2ff);
            color:#fff;
        }
        .shoppingCartain>.cartUserUnlogin>.btnContain>button:last-child{
            margin-left: .2rem;
        }
        .personHeader{
            background:#1d1d1d;
            position: fixed;
            top:0;
            left:0;
            width: 100%;
            z-index:10;
        }
   
    </style>