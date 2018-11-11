<template>
    <div class="personalContain">
        <mt-header title="个人中心"  class="personHeader"></mt-header>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner avaterContain">
                    <div>
                        <img :src="avator" alt="">
                        <span @click="toLogin">{{userName}}</span>
                    </div>
                    <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                </div>
            </div>
            <div class="mui-card-footer personServer">
                <ul>
                    <li>
                        <span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
                        <p>全部订单</p>
                    </li>
                    <li>
                        <span class="mui-icon mui-icon-extra mui-icon-extra-card"></span>
                        <p>待付款</p>
                    </li>
                    <li>
                        <span class="mui-icon mui-icon-extra mui-icon-extra-express"></span>
                        <p>待收货</p>
                    </li>
                    <li>
                        <span class="mui-icon mui-icon-person"></span>
                        <p>售后</p>
                    </li>
                </ul>
            </div>
        </div>
        <!--地址管理 优惠卷 购买码-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner personServerContain">
                    <div class="personServer2">
                        <span>地址管理</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                    </div>
                    <div class="personServer2">
                        <span>我的优惠卷</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                    </div>
                    <div class="personServer2">
                        <span>优先购买码</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                        </div> 
                    <div class="personServer2">
                        <span>提货兑换卡</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                    </div> 
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner personServerContain">
                    <div class="personServer2">
                        <span>常见问题</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                    </div>
                    <div class="personServer2">
                        <span>服务支持</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card mui-card-last">
            <div class="mui-card-content">
                <div class="mui-card-content-inner personServerContain">
                    <div class="personServer2">
                        <span>以旧换新</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                    </div>
                    <div class="personServer2">
                        <span>意外碎屏保修服务</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                    </div>
                    <div class="personServer2">
                        <span>延长保修服务</span>
                        <span class="mui-icon mui-icon-forward foMoreMsg"></span>
                    </div>
                </div>
            </div>
        </div>
        <footer-box></footer-box>
    </div>
</template>
<script>
    import footerBox from "./../components/footerContainer.vue"
   
    export default {
        data(){
            return{
                avator:"http://127.0.0.1:3002/img/user-avatar.png",
                islogin:false,
                userName:"登录/注册",
                
            }
        },
        components:{
            "footer-box" :footerBox
        },
        methods:{
            toLogin(){
                this.$router.push("/login")
            }
        },
        created() {
            this.islogin = this.$store.state.islogin;
        },
        mounted() {
            if(this.islogin){
                var avator = this.$store.state.avator;
                avator==""?this.avator=this.avator:this.avator=avator;
                this.userName=this.$store.state.userName;
            }   
        }
    }
</script>
<style scoped>
    .personalContain>.mui-card-last{
        margin-bottom:5rem;
    }
    .personalContain>.mui-card:nth-child(2){
        margin-top:3rem;
    }
    .mui-card-content>.personServerContain{
        padding:0;
    }
    .mui-card-content>.personServerContain>.personServer2{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding:1rem;
        color:#bdc3d3;
    }
    .personHeader{
        background:#1d1d1d;
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        z-index:10;
    }
    .personalContain .avaterContain{
        display: flex;
        justify-content: space-between;
        padding: 0;
    }
    .personalContain .avaterContain>div:first-child{
        padding:1rem;
    }
    .personalContain .avaterContain>div:first-child>img{
        border-radius: 50%;
        width: 3rem;
        vertical-align: middle;
        margin-right: 1rem;
    }
    span.foMoreMsg{
        display: inline-block;
        margin: auto 0;
        font-size:1rem;
        color:#bdc3d3;
        margin-right:1rem;
        font-weight: 700;
    }
    .personServer{
        padding: 0;
    }
    .personServer>ul{
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
    .personServer>ul>li{
        width: 25%;
        box-sizing: border-box;
        padding:.3rem;
    }
    .personServer>ul>li:not(:last-child){
        border-right: 1px solid #eee;
    }
    .personServer>ul>li>span::before{
        color:#bdc3d3;
        font-size:1.5rem;
    }
    .personServer>ul>li>p{
        font-size: 8px;
        color:#bdc3d3;
    }
</style>