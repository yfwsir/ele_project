<template>
<div id="homeautoplay">
    <div class="swiper-container" ref="autoplay">
        <div class="swiper-wrapper">
            <div class="swiper-slide " >
                <div  
                class = "onepage"
                 v-for="(item,index) in data" :key="index"
                 @click="getshopid(item.id,item.imgname)"
                >
                    <div class="listbox">
                        <img alt=""  :src="item.image_hash|formateImg">
                        <p>{{item.imgname}}</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide " >
                <div class= "twopage" v-for="(item,index) in twoData" :key="index">
                    <div class="listbox">
                        <img alt="" :src="item.image_hash|formateImg">
                        <p>{{item.imgname}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        data:Array,
        twoData:Array
    },
    methods:{
        getshopid(id,name){
            this.$router.push({path:'/shopdetail',query:{id:id,name:name}})
        }
    },
    mounted(){
        this.autoplaySwiper = new Swiper(this.$refs.autoplay,{
            loop:true,
            pagination: '.swiper-pagination',
        })
    },
    updated(){
        //Dom的silde发生变化,更新swiper
         this.autoplaySwiper.update();
         //重新计算循环滚动
         this.autoplaySwiper.reLoop();
         //滑动到某一页
         this.autoplaySwiper.slideTo(1,0)
    }
}
</script>

<style>
  .onepage , .twopage{
      text-align: center;
      font-size:12px;
      color:#6f6f6f;
  }
  .listbox{
      width:20%;
      height:75px;
      box-sizing:border-box;
      float:left;
      position: relative;
  }
  .listbox img{
      width:45px;
      position: relative;
      left:50%;
      top:50%;
      margin-left:-20px;
      margin-top:-30px;
  }
  .listbox p{
      margin-top:5px;
      position: relative;
      left:0;
      top:50%;
  }
</style>
