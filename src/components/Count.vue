<template>
    <div>
        <button @click="add">+</button>
        <span>{{count}}</span>
        <button @click="reduce">-</button>
                
    </div>
</template>
<script>
    import  store from "@/store"
    import {mapState,mapMutations,mapGetters} from "vuex"
    export default {
        data(){return{}},
        store,
        computed:{
            ...mapState(["count"]),
            // count(){
            //     return this.$store.getters.count
            // }
            ...mapGetters(["count"])
        },
        methods:mapMutations(["add","reduce"])
       
    }
</script>