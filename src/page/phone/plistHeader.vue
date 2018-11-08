<template>
    <div>
        <mt-header fixed :title="scrib.title" class='headerContainer'>
            <router-link :to="scrib.router" slot="left">
                <mt-button icon="back" class="backBtn">返回</mt-button>
            </router-link>
        </mt-header>
    </div>
</template>
<script>
    export default {
        props:["scrib"]
    }
</script>
<style scoped>
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
            padding:0 .1rem;
        }
</style>