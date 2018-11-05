<template>
    <footer class="footerContainer">
      <nav class="mui-bar mui-bar-tab">
        <a @click.stop.prevent="toHome" id="defaultTab" :class="`mui-tab-item ${choice==1?'mui-active':''}`"  >
          <span class="mui-icon mui-icon-home"></span>
        </a>
        <a @click.stop.prevent="toSearch"  :class="`mui-tab-item ${choice==2?'mui-active':''}`" >
          <span class="mui-icon mui-icon-search"></span>
        </a>
        <a :class="`mui-tab-item ${choice==3?'mui-active':''}`" >
          <span class="mui-icon mui-icon-chatbubble"><span class="mui-badge">9</span></span>
        </a>
        <a @click.stop.prevent="toBuyBook" :class="`mui-tab-item ${choice==4?'mui-active':''}`" >
          <span class="mui-icon mui-icon-extra mui-icon-extra-dictionary"></span>
        </a>
        <a @click.stop.prevent="toPerson" :class="`mui-tab-item ${choice==5?'mui-active':''}`" >
          <span class="mui-icon mui-icon-contact"></span>
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
            toPerson(){
                 this.choice=5
                this.$router.push("/person")
               
            },
            toHome(){
                this.choice=1
                this.$router.push("/")
            },
            toBuyBook(){
                this.choice = 4
                this.$router.push("/buybook")
            },
            toSearch(){
                this.choice = 2
                this.$router.push("/search")
            }
        }
    }
</script>
<style>

</style>