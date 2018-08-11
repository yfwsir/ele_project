<template>
    
        <!-- 创建iscroll滚动视图需要满足的条件
        1.滚动容器大小固定，overflow：hidden
        2.滚动视图必须是滚动容器的第一个子元素
        3.滚动视图的宽度或者是高度大于滚动容器时才可以滚动。
    -->
    <div class="page" ref="page">
        <div class="page_wrap">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        onScroll:Function
    },
    methods:{
        refreshScroll(){
            this.scroll.refresh();
        }  
    },
    mounted () {
        let scroll = new IScroll(this.$refs.page,{
            probeType: this.onScroll ? 3 : 0,
            scrollX:true
        })
        this.scroll = scroll ;
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        });
        scroll.on('scroll',()=>{
            let bottomY = scroll.y - scroll.maxScrollY;
            // console.log(bottomY)
            // 把距底部的距离传出去
            this.onScroll(bottomY);
        })

        // 监听定位页面传来的距顶部的距离
        this.$center.$on('toScroll',scroll=>{
            // console.log(scroll)
            this.scroll.scrollTo(0,-scroll)
        })
    }
}
</script>

<style scoped>
.page{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 50px;
    overflow: hidden;
}
</style>
