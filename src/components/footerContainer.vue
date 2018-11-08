<template>
    <footer>
        <nav class="mui-bar mui-bar-tab footer-mui">
            <router-link to="/home" id="defaultTab" class="mui-tab-item mui-active" >
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <a class="mui-tab-item" >
                <span class="mui-icon mui-icon-bars"></span>
                <span class="mui-tab-label">分类</span>
            </a>
            <a class="mui-tab-item" >
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" >
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">个人中心</span>
            </a>
        </nav>
    </footer>
</template>
<script>
    export default {
        name:"footerContainer",
        data(){
            return{
                choice:3
            }
        },
        methods:{

        }
    }
</script>
<style>

</style>