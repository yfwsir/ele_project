<template>
    <!-- <div> -->
		<page :onScroll="pageScrollY" ref="page1"  id="home" class="page">
		    <div id="home">
		        <!-- 首页搜索框 -->
		        <home-search></home-search>
		        <!--自动播放模块-->
		        <Autoplay :data="onePageData" :twoData="twoPageData" ></Autoplay>
		        <!--疯狂抢购-->
		        <Scarebuying :scareBuying="scareBuyingData"></Scarebuying>
		        <div class="business">
		            <span></span>
		            <p>推荐商家</p>
		            <span></span>
		        </div>
		        <!--筛选模块-->
		        <Homefilter></Homefilter>
		        <!-- 首页商家列表模块 -->
		        <home-restaurant v-for="(item,index) in restaurantData" :key="index" :item="item"></home-restaurant>
		    </div>
		</page>
	<!-- </div> -->
</template>

<script>
import {getAutoplayData,getScareBuyingData,restaurantData} from '../services/homeService.js';
import Autoplay from './../components/home/homeAutoplay.vue';
import Scarebuying from './../components/home/homeScareBuying.vue';
import Homefilter from './../components/home/homeFilter.vue';
// 引入首页商家列表模块
import HomeRestaurant from '../components/home/HomeRestaurant.vue';
import HomeSearch from '../components/home/HomeSearch.vue';

import tmp from '../tmp.js'
export default {
   components:{
       Autoplay,
       Scarebuying,
       Homefilter,
       HomeRestaurant,
        HomeSearch
   },
   data(){
       return{
           onePageData:[],
           twoPageData:[],
           scareBuyingData:[],
            page:0,
            restaurantData:[],
            isCanGetData:true
       }
   },
   mounted(){
        getAutoplayData().then(result=>{
        //    console.log(result)
          this.onePageData= result.slice(0,10)
          this.twoPageData= result.slice(10,13)
        })
        getScareBuyingData().then(result=>{
            // console.log(result)
            this.scareBuyingData=result;
        })
        restaurantData(this.page).then(res=>{
            this.restaurantData = res ;

        })
   },
   methods:{
        pageScrollY(y){
            if(y<80 && this.isCanGetData){
                // console.log(1)
                this.isCanGetData = false;
                this.page += 8
                restaurantData(this.page).then(res=>{
                    this.restaurantData = [...this.restaurantData,...res] ;
                    this.$nextTick(()=>{
                        this.$refs.page1.refreshScroll();
                        this.isCanGetData = true;
                    })
                })
            }
        }
    },
}
</script>
 
<style scoped>
   .business{
       width:100%;
       text-align: center;
       height:20px;
       font-size:14px;
       position: relative;
       margin:16px 0;
   }
   .business span:first-child{
       display: inline-block;
       width:30px;
       border:1px solid #999;
       position: absolute;
       left:30%;
       top:10px;
   }
   .business span:last-child{
       display: inline-block;
       width:30px;
       border:1px solid #999;
       position: absolute;
       top:10px;
       right:30%;
   }
</style>
