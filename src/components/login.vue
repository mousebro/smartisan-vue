<template>
    <div class="loginContain">
        <mt-header title="登陆官网"></mt-header>
        <div class="loginCBody">
            <input type="text" placeholder="手机号/邮箱" autofocus v-model="uname">
            <input type="password" placeholder="密码" v-model="upwd">
            <div class="loginMsg">
                <div>
                    <span :class="autoLoginClass" @click="changeStatu">✔</span>
                    <span>自动登录</span>
                </div>
                <div>
                    <span>注册</span>
                    <span>忘记密码</span>
                </div>
            </div>
            <button type="button" class="loginBtn" @click="toLogin">登录</button>
            <p  >国际手机号登录&nbsp;&nbsp;></p>
            <div class="loginAnothor">
                <a><span class="mui-icon mui-icon-weibo"></span></a>
                <a><span class="mui-icon mui-icon-qq"></span></a>
            </div>
        </div>
    </div>
</template>    
<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return{
                autoLogin:false,
                autoLoginClass:"loginAuto",
                uname:"13456789456",
                upwd:"123456",
                router:"/",
                pid:""
            }
        },
        methods:{
            changeStatu(){
                if(this.autoLogin){
                    this.autoLoginClass = "loginAuto",
                    this.autoLogin=false
                }else{
                    this.autoLoginClass = "loginUnAuto",
                    this.autoLogin=true 
                }
            },
            toLogin(){
                var reg = /^1{1}[3-9]{1}[0-9]{9}$/
                if(reg.test(this.uname)){
                    this.$http.post("http://127.0.0.1:3002/login",{uname:this.uname,upwd:this.upwd}).then(result=>{
                        if(result.body.code==200){
                            this.$store.commit('login',result.body)
                            this.$store.commit("changeCartCount",result.body.pcount)
                            this.$store.commit("changeuid",result.body.uid)
                            Toast(`${result.body.msg}`)
                            setTimeout(()=>{
                                this.$router.push(this.router+"?pid="+this.pid)
                            },3000)
                        }
                    })

                }else{
                    Toast("请输入正确的用户名")
                }
            }
        },
        created() {
            if(this.$route.query.router!=undefined){
                this.router=this.$route.query.router
                if(this.$route.query.pid!=undefined){
                    this.pid=this.$route.query.pid
                }
            }
              
        }
    }
</script>
<style scoped>
    .loginAnothor{
        width:100%;
        position:absolute;
        bottom:3rem;
        left:0;
    }
    .loginAnothor>a{
        display:inline-block;
        width:2.5rem;
        height:2.5rem;
        border-radius: 2.5rem;
        color:#808080;
        border:1px solid #808080;
        line-height: 2.5rem;
    }
    .loginAnothor>a:first-child{
        margin-right:.5rem;
        
    }
    .loginAnothor>a:last-child{
        margin-left:.5rem;
    }
    .loginContain>header.mint-header{
        background:#1d1d1d;
        font-size:1rem;
        padding:1.5rem;
    }
    .loginCBody{
        padding:1rem;
    }
    .loginCBody>.loginMsg{
        display: flex;
        justify-content: space-between;
        padding:1rem .5rem;
        font-size:.8rem;
        color:#808080;
    }
    .loginCBody>p{
        margin-top:.8rem;
        text-align: right;
        font-size: .8rem;
        padding: 0 1rem;
    }
    .loginCBody>.loginMsg>div:first-child>span{
        margin-right:1rem;
    }
    .loginCBody>.loginMsg>div:first-child>span:first-child{
        display: inline-block;
        padding:0 6px ;
        background:linear-gradient(to bottom,#709fd6,#5887bf);
        border-radius:10px;
        color:#fff;
        font-size:8px;
    }
    .loginCBody>.loginMsg>div:first-child>span.loginAuto{
        background:linear-gradient(to bottom,#709fd6,#5887bf);
    }
    .loginCBody>.loginMsg>div:first-child>span.loginUnAuto{
        background:linear-gradient(to bottom,#ccc,#ddd);
    }
    .loginCBody>.loginMsg>div:last-child>span{
        margin-left:1rem;
    }
    .loginCBody>input{
        margin-bottom:0;
        border:1px solid #ddd;
        font-size:.8rem;
        padding:1.3rem;
    }
    .loginCBody>input:nth-child(2){
        border-top:0;
        border-bottom-left-radius: .3rem;
        border-bottom-right-radius: .3rem;
    }
    .loginCBody>input:first-child{
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        box-shadow: 0 2px 2px #ddd inset; 
    }
    .loginBtn{
        background: #709fd6;
        width:100%;
        padding:.7rem;
        font-size:1rem;
        color:#fff;
        border-radius:0.4rem;
        border:1px solid #709fd6;
    }
</style>