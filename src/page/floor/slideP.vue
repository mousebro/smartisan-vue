<template>
    <div>
        <div class="title-bar-contain title-bar-floor">
            <h1 class="floor-contain">
                <span>{{Floor}}</span>
                <span class="icont iconfont icon-xiayige"></span>
            </h1>
            <div class="slideContain">
                <ul class="floor-contain-list"  @touchstart="test1($event)"  @touchmove="test2($event,index)" @touchend="test3($event,index)" >
                    <li v-for="item in list" :key="item.id" >
                        <a>
                            <div class="mask"></div>
                            <span :class="item.tagColor">{{item.msg}}</span>
                            <img v-lazy="item.imgUrl" alt="">
                        </a>
                        <div>
                            <h4>{{item.title}}</h4>
                            <p>{{item.subTitle}}</p>
                            <p><i>&yen;</i><span>{{item.price}}</span><del>{{item.oldPrice}}</del></p>
                        </div>
                    </li>
                   
                </ul>
                <div style="clear:both"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:["list","Floor","index"],
        data(){
            return{
                x1:0,
                x2:0,
                x3:0,
                x4:0,
                h:0,
                wid:0
            }
        },
        methods:{
            test1(e){
               this.x1=e.touches[0].pageX;
               e.preventDefault();
            },
            test2(e,index){
                var t1= document.getElementsByClassName("floor-contain-list")[index];
                this.h = t1.clientWidth-this.wid
                this.x2=e.touches[0].pageX;
                this.x4=this.x2-this.x1+this.x3
                this.x4>0?this.x4=0:this.x4=this.x4
                this.x4<-this.h?this.x4=-this.h:this.x4=this.x4
                //console.log("x2:"+x2)
                t1.style.left= this.x4+"px";
                this.wid =document.getElementsByClassName("slideContain")[0].clientWidth
                
            },
            test3(e,index){
                var t1= document.getElementsByClassName("floor-contain-list")[index];
                this.x3=t1.offsetLeft;
            },
            toggleModel(){
                document.getElementsByClassName("addToCartContain")[0].style.display="none";
            }
        },
        mounted() {
            var floor = document.getElementsByClassName("floor-contain-list");
            for(var i=0;i<floor.length; i++){
                floor[i].style.width=(this.list.length+1)*128+"px";
            }
         
        },
    }
</script>
<style scoped>
        .slideContain{
            position: relative;
            height:15rem;overflow: hidden;
        }
        .title-bar-contain{
            background:#fff;
            box-shadow: 0 5px 13px rgb(228, 228, 228);
            padding-bottom:1rem;
            margin-bottom:.5rem;
           border:1px solid #ddd;
        }
        .title-bar{
            display: flex;
            background: #1d1d1d;
            justify-content: space-between;
            line-height:2rem;
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
        .title-bar-floor>h1.floor-contain>span:first-child{
            font-size:.6rem;
        }
        .swipe-wrapper{
            height:10rem;
            
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
        .title-bar-contain>h1.floor-contain{
            height:40px;
            line-height: 40px;
            display: flex;
            justify-content: space-between;
            padding:0 1rem;
            border-bottom: 1px solid #ddd;
        }
        .title-bar-contain>h1.floor-contain>span{
            font-weight: bold;
            font-size:1rem;
        }
        .title-bar-floor{
            overflow: hidden;
        }
        .floor-contain-list{
            position: absolute;
            height:15rem;
        }
        .floor-contain-list>li{
            float: left;
            margin:.5rem;
        }
        .floor-contain-list>li>a{
            display: inline-block;
            border:1px solid #ddd;
            box-shadow: 0  0 .12rem #ddd;
            position: relative;
        }
        .floor-contain-list>li>a>.mask{
            position: absolute;
            top:0;
            right:0;
            left:0;
            bottom:0;
            background:rgba(0,0,0,.06);
            z-index:10;
        }
        .floor-contain-list>li>a>.color-tag-red{
            padding:.2rem .53rem;
            font-weight:700;
            z-index: 20;
            font-size:.8rem;
            color:#cc3e39;
            background:#ffe7e5;
            border-color:#f0948d;
            position: absolute;
            top:0;
            left:0;
            border-radius: 1rem;
        }
        .floor-contain-list>li>a>.color-tag-yellow{
            color:#e6b217;
            background:#fffbe5;
            border-color:#ffe57a;
        }
        .floor-contain-list>li>a>img{
            width:126px;
            height:126px;
        }
        .floor-contain-list>li>div{
            position: relative;
            margin-top:1rem;
        }
        .floor-contain-list>li>div>h4{
          font-weight:bold;
          font-size:.6rem;
          white-space:nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color:#333;
        }
        .floor-contain-list>li>div>p:first-child{
            margin-top:.3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .5rem;
            color:#7f7f7f;
            line-height:1.2;
        }
        .floor-contain-list>li>div>p:last-child{
            color:#d44d44;
            white-space: nowrap;
            font-weight: 700;
        }
        .floor-contain-list>li>div>p:last-child>del{
            font-size:.7rem;
            color:#7f7f7f;
            padding-left:.4rem;
        }
        .floor-contain-list>li>div p{
            text-overflow: ellipsis;
            overflow: hidden;
        }
</style>