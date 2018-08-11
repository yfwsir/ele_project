<template>
<div>
    <div class="position" @click="goLocation">
        <i class="iconfont icon-search"></i>
        <span class="address">{{$store.state.cityName}}</span>
    </div>
    <div class="home_search">
        <div class="search" @click="goSearch">
            <i class="iconfont icon-search"></i>
            <span>搜索饿了么商家、商品名称</span> 
        </div>
    </div>


<!-- <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
<div id="location" v-if="isLocation==true">
    
    <div class="location_back" @click="back_home">
        <i class="iconfont icon-icon"></i>
    </div>
    <div class="location_header">
        <p class="select">选择收获地址</p>
    </div>

    

    <page id="location_page">
        <ul class="cityNav">
            <li v-for="(value,key) in citiesData" :key="key" class="cityNav_item">
                <a :href="'#'+key">{{key}}</a>   
            </li>
        </ul>
        <div class="cities">
            <div v-for="(value,key) in citiesData" :key="key">
                <p class="citiesKey" :id="key">{{key}}</p>
                <ul class="citiesList">
                    <li v-for="(item,index) in value" :key="index" 
                            class="citiesItem">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </page>
   
</div>
</transition> -->


</div>
</template>

<script>
import {getCitiesData} from '../../services/homeService'
export default {
    data () {
        return {
            isLocation:false ,
             citiesData:{}       
        }
    },
    methods:{
        goSearch(){
            this.$router.push({path:'/search'})
        },
        goLocation(){
            this.$router.push({path:'/location'})
            // this.isLocation = true;
        },
        back_home(){
            this.$router.back() ;
            // this.isLocation = false;
        }
    },
    mounted(){
        getCitiesData().then(res=>{
            this.citiesData = res ;
        })
    }
}
</script>

<style scoped>
.position{
    width: 100%;
    height: 50px;
    background: #0af;
    padding: 0 15px;
}
.position .icon-search{
    font-size: 18px;
    line-height: 50px;
    color: white;
    font-weight: 900;
}
.address{
    color: white;
    font-size: 16px;
    font-weight: 900;
}


.home_search{
    width: 100%;
    height: 52px;
    background: #0af;
    padding: 8px 15px;
    box-sizing: border-box;
}
.search{
    box-sizing: border-box;
    background: white;
    padding: 8px 0;
    text-align: center;
    font-size: 16px;
    color: #999;
    line-height: 20px;
}

</style>
