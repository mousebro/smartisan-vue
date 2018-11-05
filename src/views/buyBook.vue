<template>
    <div class="buyBookContainer">
        <header class="mui-bar mui-bar-nav">
			<!--<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>-->
            <span class="nav-active">全部</span>
            <span>已购</span>
	    </header>
        <ul>
            <li v-for="item in list">
                <img src="http://127.0.0.1:3000/img/mdlist1.jpg">
                <div>
                    <h5>Python实战，用Scrapyd打造个人话的爬虫部署管理控制台</h5>
                    <span>韦世东</span>
                    <p>
                        <span>22小节</span><span>·</span><span>355人已经购买</span>
                    </p>
                </div>
                <div><span>&yen;29.9</span></div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "buyBookContainer",
        data(){
            return{
                list:[1,1,1,1,11,1,1,]
            }
        }
    }
</script>
<style scoped>
    h5,p{padding:0;margin:0;}
    .buyBookContainer>header{
        display:flex;
        justify-content:center;
    }
    .buyBookContainer>ul{
        margin-top:44px;
        list-style:none;
        padding:.5rem;
    }
    .buyBookContainer>ul>li{
        display:flex;
        justify-content:space-between;
        border-bottom:1px solid #ccc;
        height:8rem;
        padding:.5rem 0 ;
    }
     .buyBookContainer>ul>li>img{
         width:20%;
         height:6rem;
     }
     .buyBookContainer>ul>li>div:nth-child(2){
         width:50%;
         margin:0 5%;
         text-align:left;
     }
     .buyBookContainer>ul>li>div:nth-child(2)>h5{
         font-weight:bold;
         margin-bottom:.8rem;
         color:#000;
         line-height:1.1rem;
     }
     .buyBookContainer>ul>li>div:nth-child(2)>p>span{
         font-size:.75rem;
         margin-right:.5rem;
     }
     .buyBookContainer>ul>li>div:nth-child(2)>span{
         font-size:.75rem;

     }
     .buyBookContainer>ul>li>div:nth-child(3){
         width:20%;
         display:flex;
         flex-direction:column;
         justify-content:center;
     }
     .buyBookContainer>ul>li>div:nth-child(3)>span{
         display:inline-block;
         width:80%;
         padding:.2rem .2rem;
         border-radius:1rem;
         font-size:.75rem;
         background:#d1e8f9;
         color:#26a2ff;
     }
</style>