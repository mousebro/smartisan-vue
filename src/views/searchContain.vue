<template>
    <div class="searchContain">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-search ">搜索</span>
		</header>
        <div class="swipeContain">
            <mt-swipe :auto="4000"> <!--auto代表时间间隔-->
                <mt-swipe-item v-for="item in list" :key="item.id"><img :src="item.imgurl">      </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        name : "searchContain",
        data(){
            return{
                list:[]
            }
        },
        methods:{
            getImage(){
                this.axios.get(
                    "http://127.0.0.1:3000/imagelist/"
                ).then(result=>{
                    this.list= result.data
                    console.log(this.list)
                })  
            
            }
        },
        created(){
            this.getImage()
        }
    }
</script>
<style scoped>
    .searchContain>header{
        padding:.45rem;
    }
    .searchContain>header>span{
        display:inline-block;
        width:100%;
        font-size:1rem;
        text-align:left;
        background:#98cef7;
        color:#fff;
             
    }
    .searchContain>header>span:before{
        font-size:1.2rem;
    }
    .mui-bar-nav.mui-bar .mui-icon{
        margin:0;
    }
    .searchContain>.swipeContain{
        margin-top:3.2rem;
        height:10rem;
        width:100%;
    }
    .searchContain>.swipeContain img{
        width:100%;
    }
</style>