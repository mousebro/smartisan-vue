<template>
        <div class="personalContain">
            <mt-header fixed title="购物车" class='headerContainer'>
                <a slot="right">
                    <mt-button  class="backBtn" v-if="operation" @click="changeOperation">编辑</mt-button>
                    <mt-button  class="backBtn" v-else @click="changeOperation">完成</mt-button>
                </a>
            </mt-header>
            <div class="shoppingCartain">
               <div class="cartUserUnlogin" v-if="islogin">
                    <img src="http://127.0.0.1:3002/img/sCart.png" alt="">
                    <h4>购物车暂无商品</h4>
                    <p>添加购物车的商品将会显示在这里</p>
                    <div class="btnContain">
                        <button type="button" @click="toLogin">登陆</button>
                        <button type="button">现在选购</button>
                    </div>
                </div>
                <div class="cartUserislogin" v-else>
                    <div class="discount">
                        <div>
                            <span>点击领取优惠卷</span><span class="mui-icon mui-icon-arrowright"></span>
                        </div>
                    </div>
                    <div class="mui-card" v-for="(item,i) in cartPlist" :key="item.pid">
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner personServerContain">
                                <ul class="listUl">
                                    <li >
                                        <div>
                                            <span :class="item.isSelectd==true?'loginAuto':'loginUnAuto'" @click.stop.prevent="oprationD($event,i)">✔</span>
                                            <img :src="item.imgurl" alt="">
                                        </div>
                                        <div>
                                            <h4>{{item.title}}</h4>
                                            <p>{{item.scrib}}</p>
                                            <p v-if="operation">
                                                <span>&yen;{{item.price.toFixed(2)}}</span><span>x</span><span>{{item.count}}</span>
                                            </p>
                                            <p v-else>
                                                <span class="changecount"><span @click="prodNum(i)">-</span><i v-cloak>{{item.count}}</i><span @click="addNum(i)">+</span></span>        
                                                <span>&yen;{{item.price.toFixed(2)}}</span>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <product-list :proTitle="proTitle" :productL="productL"></product-list> 
                </div>
            </div>
            <div class="mui-card " v-if="operation">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner personServerContain windAccount">
                        <div>
                            <span :class="allSelect==true?'loginAuto':'loginUnAuto'" @click="allSelectchange">✔</span>
                            <span>已选 <i>{{selectCount}}</i> 件</span>
                        </div>
                        <div>
                            <div>
                                <p>合计<span>&yen;{{totalPrice.toFixed(2)}}</span></p>
                                <span>已享受免邮费</span>
                            </div>
                            <button>现在结算</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mui-card " v-else>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner personServerContain windAccount">
                        <div>
                            <span :class="allSelect==true?'loginAuto':'loginUnAuto'"  @click="allSelectchange">✔</span>
                            <span>已选 <i>{{selectCount}}</i> 件</span>
                        </div>
                        <div class="delChose">
                            <button :class="wantTod?'toDeleteP':''">删除所选</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer-box></footer-box>
        </div>
    </template>
    <script>
        import productL from "./floor/productL.vue"
        import footerBox from "./../components/footerContainer.vue"
       import {Toast} from "mint-ui"
        export default {
            data(){
                return{
                        islogin:false,
                        proTitle:"相关推荐",
                        productL:[{id:1,title:"坚果Pro 2S",scrib:"双系统无限屏",price:"1,998.00",           imgUrl:"http://127.0.0.1:3002/img/pro05.webp",color:"maskRed",msg:"买赠"},
                            {id:2,title:"坚果Pro 2S TPU软胶手机套",scrib:"经典配色，质感精良",price:"49.00",imgUrl:"http://127.0.0.1:3002/img/pro06.webp",color:"",msg:""},
                            {id:3,title:"坚果Pro 2S TPU软胶手机套",scrib:"经典配色，质感精良",price:"29.00",imgUrl:"http://127.0.0.1:3002/img/pro09.webp",color:"",msg:""},
                            {id:4,title:"坚果砖式蓝牙小音箱",scrib:"一款设计出色，音质出众的随身音箱",price:"1,49.00",imgUrl:"http://127.0.0.1:3002/img/pro07.webp",color:"",msg:""},
                            {id:5,title:"坚果彩虹数据线",scrib:"七彩随机发货",price:"19.00",imgUrl:"http://127.0.0.1:3002/img/pro08.webp",color:"",msg:""},
                            {id:6,title:"坚果蓝牙小白耳机",scrib:"一副干净的蓝牙耳机",price:"99.00",imgUrl:"http://127.0.0.1:3002/img/pro10.webp",color:"maskYellow",msg:"直减"}
                            ],
                     select:[],   
                     operation:true,
                     cartPlist:[{pid:1,count:1,price:1299.00,scrib:"酒红色，4G+32G·全网通",title:"坚果3",imgurl:"http://127.0.0.1:3002/img/plist02.webp",isSelectd:false},{pid:2,count:2,price:2299.00,scrib:"墨黑色，6G+64G·全网通",title:"坚果Pro",imgurl:"http://127.0.0.1:3002/img/plist01.webp",isSelectd:false}],
                     totalPrice:0,
                     allSelect:false,
                     selectCount:0,
                     wantTod:false
                     
                }
                
            },
            components :{
                "footer-box" :footerBox,
                "product-list":productL
            },
            methods:{
                toLogin(){
                    this.$router.push("/login")
                },
                changeOperation(){
                    this.operation = !this.operation

                },
                addNum(i){
                    if(this.cartPlist[i].count==4){
                        Toast("最多购买四台")
                    }else{
                        this.cartPlist[i].count++
                    }
                },
                prodNum(i){
                    if(this.cartPlist[i].count>=2){
                        this.cartPlist[i].count-- 
                    }
                },
                oprationD(e,i){
                    this.cartPlist[i].isSelectd=!this.cartPlist[i].isSelectd
                   if(this.cartPlist[i].isSelectd){
                        this.totalPrice += (this.cartPlist[i].price) *(this.cartPlist[i].count)
                       this.selectCount+=this.cartPlist[i].count
                       this.wantTod = true
                   }else{
                        this.totalPrice -= (this.cartPlist[i].price) *(this.cartPlist[i].count)
                        this.selectCount-=this.cartPlist[i].count
                   }
                   var state = true
                   for(var j =0;j<this.cartPlist.length;j++){
                        state = this.cartPlist[j].isSelectd && state
                        this.allSelect=state                   
                   }
                },
                allSelectchange(){
                    if(this.allSelect){
                        this.allSelect = !this.allSelect;
                        this.totalPrice = 0
                        this.selectCount = 0
                        for(var j =0;j<this.cartPlist.length;j++){
                           this.cartPlist[j].isSelectd = false
                        }
                    }else{
                        this.allSelect = !this.allSelect;
                        this.totalPrice=0
                        this.selectCount=0
                        for(var k =0;k<this.cartPlist.length;k++){
                            this.totalPrice += (this.cartPlist[k].price) *(this.cartPlist[k].count)
                            this.selectCount+=this.cartPlist[k].count
                           this.cartPlist[k].isSelectd = true
                        }
                    }
                }
                
            },
            created() {
                this.islogin=!this.$store.state.islogin;
                var count = this.cartPlist.length
                this.$store.commit("changeCartCount",count)
            },
            mounted() {

            }  
        }
    </script>
    <style scoped>
            /*商品数量的加减*/
            span.changecount{
                display: inline-block;
            }
           span.changecount>span{
                display: inline-block;
                width:18px;
                height:18px;
                text-align: center;
                color:#808080;
                border-radius:9px;
                background:linear-gradient(to top,#ddd,#fff);
                box-shadow: 0 0 3px #808080;

            }
            span.changecount>i{
                display: inline-block;
                margin:0 .5rem;
            }
            span.changecount~span{
                font-size:.75rem;
                color:#d04f48;
                font-weight:700;
            }
            /*领取优惠卷*/
            .cartUserislogin>.discount{
                position: fixed;
                top:40px;
                width:100%;
                height:3rem;
                z-index: 10;
                background: #ffe7e5;
                box-shadow: inset 0 5px 13px rgba(0,0,0,.12), 0 5px 13px rgba(0,0,0,.12);
            }
            .cartUserislogin>.discount>div{
                display: flex;
                justify-content: space-between;
                width: 100%;
                height:100%;
                padding:0 1rem;
                box-sizing: border-box;
                align-items: center;
            }
            .cartUserislogin>.discount>div>span{
                font-size:.75rem;
                color:#d04f48;
                font-weight:700;
            }
            .cartUserislogin>.discount>div>span>i{
                width:1.35rem;
                height: 1.35rem;
                display: block;
                background: url(http://127.0.0.1:3002/img/discount.png);
            }
            .cartUserislogin>.mui-card:nth-child(2){
                margin-top:1.5rem !important;
            }
            /*结算*/
         
            .windAccount{
                display: flex;
                justify-content: space-between;
                padding: 0;
            }
            .windAccount>div:first-child{
                display: flex;
                justify-content: space-around;
                width: 30%;
                align-items: center;
            }
            .windAccount>div:last-child{
                width: 60%;
                display: flex;
                justify-content: space-between;
                align-content: middle;
            }
            .windAccount>div:last-child>button{
                height:2.3rem;
                padding: 0 1rem;
                border-radius: .3rem;
                font-size:8px;
                background:linear-gradient(#6f94e8,#5178df);
                color:#fff;
                width: 50%;
                box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
            }
            .windAccount>div.delChose{
                justify-content: flex-end;
                margin-right:1rem;
            }
            /*操作后的删除商品按钮*/


            .windAccount>div.delChose>button{
                background:linear-gradient(#bfbfbf,#999);
            }
            .windAccount>div.delChose>button.toDeleteP{
                background: linear-gradient(#db6962,#d0453d);
            }
            .windAccount>div:last-child>div>p{
                font-size:.5rem;
                color:#000000;
                margin:0;
            }
            .windAccount>div:last-child>div>p>span{
                color:#d44d44;
                font-weight: 700;
                margin-left:.5rem;
            }
            .windAccount>div:last-child>div>span{
                display: block;
                text-align: left;
                color:#d44d44;
                font-size:.5rem;
            }
            .personalContain>.mui-card{
                position: fixed;
                bottom:50px;
                width:100%;
                background:linear-gradient(to top,#eae9e9,#f0f0f0);
                margin:0;
                box-shadow: 0 0 4px #808080;
                padding:.2rem;
            }
            /*购物车列表*/
            .cartUserislogin{
                margin-top:4rem;
            }
            .personServerContain>.listUl>li{
                display: flex;
                justify-content: flex-start;
            }
            .personServerContain>.listUl>li>div>img{
                width: 4rem;
                height: 5rem;
                display: inline-block;
                vertical-align: middle;
                margin-left:20%;
            }

            .personServerContain>.listUl>li>div:last-child{
                text-align: left;
                width: 60%;
            }
            .personServerContain>.listUl>li>div:last-child>h4{
                font-size:.5rem;
                font-weight:700;
            }
            .personServerContain>.listUl>li>div:last-child>p{
                font-size:8px;
                margin:0;
            }
            .personServerContain>.listUl>li>div:last-child>p:last-child>span{
                display: inline-block;
                margin-right:.5rem;
            }
            .personServerContain>.listUl>li>div:last-child>p:last-child>span:first-child{
                color:#d44d44;
                font-weight: 700;
            }
           
            .personServerContain>.listUl>li>div:first-child{
                width: 40%;
            }
            span.loginAuto{
                background:linear-gradient(to bottom,#709fd6,#5887bf);
                display: inline-block;
                padding:0 6px ;
                background:linear-gradient(to bottom,#709fd6,#5887bf);
                border-radius:10px;
                color:#fff;
                font-size:8px;
                width:20px;
                height:20px;
            }
            span.loginUnAuto{
                background:linear-gradient(to bottom,#ccc,#ddd);
                display: inline-block;
                padding:0 6px ;
                border-radius:10px;
                color:#fff;
                font-size:8px;
                width:20px;
                height:20px;
            }
            .headerContainer{
                background: #1d1d1d;
                z-index:999 !important;
            }
            .headerContainer button{
                height:1.5rem;
                background: -webkit-linear-gradient(#3e3c3c,#1d1d1d);
                background: -moz-linear-gradient(#3e3c3c,#1d1d1d);
                background: -o-linear-gradient(#3e3c3c,#1d1d1d);
                background: -ms-linear-gradient(#3e3c3c,#1d1d1d);
                box-shadow: 0 0 1px #ccc;
                padding:.2rem .3rem;
            }
        .sCartHeader{
            height: 3rem;
            width: 100%;
            background: #1d1d1d;
            color:#fff;
            display: flex;
            justify-content: space-between;
        }
        .sCartHeader>span{
            display:inline-block;
            line-height: 100%;
        }
        .shoppingCartain>.cartUserislogin>.mui-card{
            margin:.2rem 0;
            padding: 0;
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