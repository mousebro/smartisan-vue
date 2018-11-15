<template>
    <div class="addToCartContain" @click="toggleModel($event)">
        <div class="modelContain">
            <div class="modelContain-header">
                <img :src="product.imgUrl" alt="">
                <div>
                    <h4>{{product.title}}</h4>
                    <p>{{choseColored}}·{{chosesized}}</p>
                    <p>&yen;{{price}}</p>
                </div>
            </div>
            <div @touchstart="test1($event)" @touchmove="test2($event)" @touchend="test3($event)" class="typeChoseContain">
                <div class="typeChose" >
                    <h4>颜色选择</h4>
                    <div >
                        <span v-for="item in color" :key='item.cid' :class="pColor==item.cid?'borderColor':''" @click="choseColor(item.cid)"><i :class="item.bg"></i>{{item.bg | colorText}}</span>
                        <!--<span :class="pColor==0?'borderColor':''" @click="choseColor(0)"><i></i>酒红色</span>-->
                    </div>
                    <h4>容量选择</h4>
                    <div>
                        <span v-for="(item,i) in size" :key="item.sid" :class="pType==size[i].sid?'borderColor':''" @click="choseType(size[i].sid)">{{item.size}}</span>
                    </div>
                    <h4>数量选择</h4>
                    <div class="changeNum">
                        <div><span @click="prodNum">-</span><i v-cloak>{{Num}}</i><span @click="addNum">+</span></div>
                    </div>
                    <h4 class="addServer"><span>添加服务</span><span>保修服务介绍&nbsp;&nbsp;></span></h4>
                    <div>
                        <span :class="pServer==0?'borderColor':''" @click="choseServer(0)"><p>坚果Pro2意外屏碎保修服务99元/年</p><span>折算后仅需0.27元/天</span></span>
                        <span :class="pServer==1?'borderColor':''" @click="choseServer(1)"><p>坚果Pro2延长保修服务（延保）149/年</p><span>折算后仅需0.41元/天</span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="detaiFooter">
            <div class="iconContain" style="background:url(http://127.0.0.1:3002/img/sCart.png)" >
                <span @click="toSCart">{{pCartCount}}</span>
            </div>
            <div class="buyNow" @click="comfirmeAdd">确认</div>
        </div>
    </div>
</template>
<script>
    
    export default {
        data(){
            return{
                x1:0,
                x2:0,
                x3:0,
                x4:0,
                h:0,
                pColor:-1,//手机颜色
                Num:1,//商品数量
                pServer:-1, //服务类型
                pType:-1,//内存型号选择
                product:[],
                size:[],
                color:[],
                choseColored:"炭黑色",
                chosesized:"6G+128G",
                price:0,
                pCartCount:0
            }
        },
        props:["pid"],
        methods:{
            test1(e){
               this.x1=e.touches[0].pageY;
            },
            test2(e){
                var t1= document.getElementsByClassName("typeChose")[0];
                this.h = t1.clientHeight-272
                this.x2=e.touches[0].pageY;
                this.x4=this.x2-this.x1+this.x3
                this.x4>0?this.x4=0:this.x4=this.x4
                this.x4<-this.h?this.x4=-this.h:this.x4=this.x4
                //console.log("x2:"+x2)
                t1.style.top= this.x4+"px";
                t1.clientHeight
                e.preventDefault();
            },
            test3(){
                var t1= document.getElementsByClassName("typeChose")[0];
                this.x3=t1.offsetTop;
                
            },
            toggleModel(e){
                if(e.target==document.getElementsByClassName("addToCartContain")[0]){
                    document.getElementsByClassName("addToCartContain")[0].style.display="none";
                }
                
            },
            choseColor(a){//颜色选择
                this.pColor=a
            },
            prodNum(){ //数量减
                this.Num<=1?this.Num=1:this.Num--
            },
            addNum(){ //数量加
                this.Num>49?this.Num=50:this.Num++
            },
            choseServer(a){
                this.pServer=a
            },
            choseType(a){
                this.pType=a
            },
            //根据商品id获取商品数据
            getProduct(){
                this.$http.get("http://127.0.0.1:3002/product?pid="+this.pid).then(result=>{
                    this.product = result.body.msg.product
                    this.size = result.body.msg.size
                    this.color = result.body.msg.color
                    this.price = this.product.price.toFixed(2);
                    this.$store.commit("productDetail",this.product)
                })
            },
            //点击购物车图标进行跳转
            toSCart(){
                if(this.$store.state.islogin){
                    this.$router.push("/Cart")
                }else{
                     this.$router.push("/login?router=/phoneList/detail")
                }
           
            },  
            comfirmeAdd(){
                if(this.$store.state.islogin){
                    this.$http.post("http://127.0.0.1:3002/updateCart",{
                        userid:this.$store.state.uid,
                        pCid:this.pid,
                        pCount:this.Num,
                        pColor:this.choseColored,
                        psize:this.chosesized
                    }).then(result=>{
                       var res = result.body
                        if(res.code==201 || res.code==202){
                            var obj = {code:1,pCount:this.Num}
                            this.$emit("changeMsg",obj)
                        }
                    })
                }else{
                    this.$router.push("/login?router="+this.$route.path+"&&pid="+this.pid)
                }
               
            }

        },
        created() {
            this.getProduct()
            this.pCartCount = this.$store.state.shoppingCartCount
          
        },
    }
</script>
<style scoped>

    .typeChoseContain{
        height:20rem;
        position: relative;
        overflow: hidden
    }
    .typeChose{
        text-align: left;
        position: absolute;
        width:100%;
    }
    .typeChose>div:last-child{
        display: flex;
        flex-wrap: wrap;
    }
    .typeChose>div:last-child>span{
        width: 100%;
        display: inline-block;
        margin-bottom: .5rem;
    }
    .typeChose>div:last-child>span>p:first-child{
        color:#000;
        font-size:.8rem;
    }
    .typeChose>div:last-child>span>span:last-child{
        color:#ccc;
    }
    .typeChose>h4{
        font-size:.8rem;
        font-weight:700;
        padding:1rem;
        border-bottom:1px solid #ddd;
    }
    .typeChose>h4.addServer{
        display: flex;
        justify-content: space-between;
       
    }
    .typeChose>h4.addServer>span:last-child{
        color:#808080;
    }
    .typeChose>div{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding:1rem;
        border-bottom:1px solid #ddd;
    }
    .typeChose>div.changeNum>div>span{
        display: inline-block;
        width:18px;
        height:18px;
        text-align: center;
        color:#808080;
        border-radius:9px;
        background:linear-gradient(to top,#ddd,#fff);
        box-shadow: 0 0 3px #808080;

    }
    .typeChose>div.changeNum>div>i{
        display: inline-block;
        margin:0 1rem;
    }
    .typeChose>div>span{
        display: inline-block;
        padding:.4rem 1.5rem;
        font-size:.5rem;
        border:1px solid #ddd;
        border-radius:.3rem;
        margin-right:1rem;
        margin-bottom:1rem;
        text-align: center;
    }
    .typeChose>div>span>i{
        display: block;
        width:18px;
        height:18px;
        border-radius:18px;
        margin-bottom:.3rem;
        margin-left:.3rem;
    }
    .typeChose>div>span>i.red{
        background:#722b35;
    }
    .typeChose>div>span>i.blue{
        background:#332b72;
    }
    .typeChose>div>span>i.yellow{
        background:#f7ad3c;
    }
    .typeChose>div>span>i.black{
        background:#333333;
    }
    .typeChose>div>span>i.green{
        background:#55eaa7;
    }
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
        font-size:.8rem;
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
    .detaiFooter{
        box-shadow: 0 0 2px #808080;
    }
    .detaiFooter>.iconContain{
        width:2.5rem;
        height:2.5rem;
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
        line-height:3rem;
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
    .borderColor{
        border:1px solid #506cbb !important;
    }
</style>