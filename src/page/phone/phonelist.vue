<template>
    <div clsss="phoneList">
        <p-header :scrib="scrib"></p-header>
        <!--商品列表-->
        <ul class="listUl">
            <li v-for="item in list" :key="item.id" @click="toPdetail(item.id,item.title)">
                <div>
                    <span :class="item.color">{{item.mask}}</span>
                    <img v-lazy="item.imgUrl" alt="">
                </div>
                <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.scrib}}</p>
                    <p><span v-for="n in item.type" :key="n.id">{{n.size}}</span></p>
                    <p>
                       <i v-for="bi in item.bgcl" :bgcl="bi.bg" :key="bi.id"></i>
                    </p>
                    <p>&yen;{{item.price}}</p>
                </div>
            </li>
        </ul>
        <footer-box></footer-box>
    </div>
</template>
<script>
    import phoneH from "./plistHeader.vue"
    import footerBox from "./../../components/footerContainer.vue"
    export default {
        data(){
            return{
                list:[{id:1,color:"maskRed",imgUrl:"http://127.0.0.1:3002/img/plist01.webp",mask:"买赠",title:"坚果 Pro2S",scrib:"双系统，无限屏",type:[{id:1,size:"4G+64G"},{id:2,size:"6G+64G"},{id:3,size:"6G+128G"}],bgcl:[{id:1,bg:"red"},{id:2,bg:"blue"},{id:3,bg:"yellow"}],price:"1,789.00"},
                {id:2,color:"maskRed",imgUrl:"http://127.0.0.1:3002/img/plist02.webp",mask:"买赠",title:"坚果3",scrib:"漂亮的不像实力派",type:[{id:1,size:"4G+64G"},{id:2,size:"6G+64G"},{id:3,size:"6G+128G"}],bgcl:[{id:1,bg:"red"},{id:2,bg:"blue"},{id:3,bg:"yellow"}],price:"1,789.00"},
                {id:3,color:"maskYellow",imgUrl:"http://127.0.0.1:3002/img/plist03.webp",mask:"买赠",title:"坚果 R1",scrib:"次世代旗舰手机",type:[{id:1,size:"4G+64G"},{id:2,size:"6G+64G"},{id:3,size:"6G+128G"},{id:4,size:"8G+512G"},{id:5,size:"8G+1T"}],bgcl:[{id:2,bg:"blue"},{id:3,bg:"yellow"}],price:"2,999.00"},
                {id:4,color:"",imgUrl:"http://127.0.0.1:3002/img/plist04.webp",mask:"",title:"坚果 Pro2",scrib:"漂亮的不像实力派",type:[{id:1,size:"4G+64G"},{id:2,size:"6G+64G"},{id:3,size:"6G+128G"}],bgcl:[{id:1,bg:"red"},{id:2,bg:"blue"},{id:3,bg:"yellow"},{id:4,bg:"green"}],price:"1,799.00"},
                {id:5,color:"maskRed",imgUrl:"http://127.0.0.1:3002/img/plist01.webp",mask:"买赠",title:"坚果3",scrib:"漂亮的不像实力派",type:[{id:1,size:"4G+64G"},{id:2,size:"6G+64G"},{id:3,size:"6G+128G"}],bgcl:[{id:1,bg:"red"},{id:2,bg:"blue"},{id:3,bg:"yellow"}],price:"1,789.00"}
                ],
                scrib:{title:"手机",router:"/home"}
            }
        },
        methods:{
            toPdetail(id,title){
                this.$router.push("/phoneList/detail?pid="+id+"&title="+title)
            }
        },
        components:{
            "p-header":phoneH,
            "footer-box":footerBox
        }
    }
</script>
<style scoped>
    ul.listUl{
        margin-top:2.5rem;
    }
    ul.listUl>li{
        display: flex;
        justify-content: space-between;
        padding:1rem;
        border-bottom:1px solid #ddd;
    }
    ul.listUl>li>div:first-child{
        width:40%;
        position:relative;
    }
    ul.listUl>li>div:first-child>img{
        width:8rem;
    }
    ul.listUl>li>div:first-child>span{
        position:absolute;
    }
    ul.listUl>li>div:first-child>span.maskRed{
        line-height:0;
        display: inline-block;
        padding:.5rem .6rem;
        border-radius:.4rem;
        color:#cc3e39;
        background:#ffe7e5;
        position:absolute;
        top:-.5rem;
        left:-.5rem;
        font-size:.3rem;
        border:1px solid #f0948d;
    }
    ul.listUl>li>div:first-child>span.maskYellow{
        line-height:0;
        display: inline-block;
        padding:.5rem .6rem;
        border-radius:.4rem;
        color:#e6b217;
        background:#fffbe5;
        position:absolute;
        top:-.5rem;
        left:-.5rem;
        font-size:.3rem;
        border:1px solid #ffe57a;
    }
    ul.listUl>li>div:last-child{
        text-align:left;
        padding-left:1rem;
        width:60%;
    }
    ul.listUl>li>div:last-child>h4{
        font-size:.8rem;
        font-weight:700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height:1rem;
    }
    ul.listUl>li>div:last-child>p{
        padding:0;
        margin:0;
        font-size:.6rem;
    }
    ul.listUl>li>div:last-child>p:not(:nth-child(3)){
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    ul.listUl>li>div:last-child>p>span{
        display: inline-block;
        padding: 0 .3rem;
        margin-right:.1rem;
        margin-top:.1rem;
        border-radius:.3rem;
        background:lightblue;
        font-size:8px;
        color:#6060bb;
        border:1px solid #6060bb;
    }
    ul.listUl>li>div:last-child>p:last-child{
        color:#d44d44;
        font-weight:700;
    }
    ul.listUl>li>div:last-child>p>i{
        display: inline-block;
        width:10px;
        height:10px;
        position:relative;
        margin-right:.5rem;
        border-radius: 1rem;
        border:1px solid #ccc;
        margin-top:.5rem;
    }
    ul.listUl>li>div:last-child>p>i::before{
        content: "";
        display:inline-block;
        width:6px;
        height:6px;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:#000;
        border-radius:.5rem;
        margin:auto;
    }
    ul.listUl>li>div:last-child>p>i[bgcl="red"]:before{
        background:#a03232;
    }
    ul.listUl>li>div:last-child>p>i[bgcl="blue"]:before{
        background:#6060bb;
    }
    ul.listUl>li>div:last-child>p>i[bgcl="yellow"]:before{
        background:lightyellow;
    }
    ul.listUl>li>div:last-child>p>i[bgcl="green"]:before{
        background:lightgreen;
    }


</style>