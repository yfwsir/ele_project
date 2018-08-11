<template>
    <div id="scarebuying">
        <div class="scarebuying_left" v-for="(item, index) in scareBuying" :key="index">
            <h4>{{item.imgname}}</h4>
            <p>{{item.description}}</p>
            <p>{{item.population}}人正在抢<span class="iconfont icon-arrow-left"> </span></p>
            <img :src="scareBuying[0].image_hash|formateImg" alt="">
        </div>
        <div class="scarebuying_right" v-for="item in scareBuying" :key="item.id">
            <h4>{{item.imgname}}</h4>
            <p>{{item.description}}</p>
            <p>{{item.population}}人正在抢<b class="iconfont icon-arrow-left"> </b></p>
            <img :src="item.image_hash|formateImg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        scareBuying:Array
    }
}
</script>

<style>
    #scarebuying{
        display:flex;
        box-sizing: border-box;
    }
    .scarebuying_left , .scarebuying_right{
        flex:1;
        margin-top:20px;
        font-size:12px;
        background:#f4f4f4;
        height:140px;
        color:#777777;
    }
    .scarebuying_left{
        margin-left:10px;
        position: relative;
    }
    .scarebuying_right{
        margin-left:3px;
        margin-right:10px;
        position: relative;
    }

    .scarebuying_left h4 , .scarebuying_right h4 {
        font-size:16px;
        margin-left:10px;
        margin-top:10px;
    }
    .scarebuying_left h4{
        color:#111;
    }
    .scarebuying_right h4{
        color:#e81919;
    }
    .scarebuying_left p , .scarebuying_right p{
        margin-left:10px;
        line-height:22px;
    }
    .scarebuying_left p:last-child{
      color:#b68d6e;
    }
    .scarebuying_right p:last-child{
        color:#e81919;
    }
    .scarebuying_left img,.scarebuying_right img{
        width:84px;
        position: absolute;
        right:0;
        bottom:0;
    }

</style>
