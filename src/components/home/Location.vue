<template>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">

<div id="location">
    
    <Header/>
    <ul class="cityNav">
        <li v-for="(value,key) in citiesData" :key="key" class="cityNav_item" @click="changeHeight(key)">
           {{key}}
        </li>
    </ul>
    <page id="location_page" ref="page1"> 
        <div class="cities">
            <div v-for="(value,key) in citiesData" :key="key" :ref="key">
                <p class="citiesKey">{{key}}</p>
                <ul class="citiesList">
                    <li v-for="(item,index) in value" :key="index" 
                            class="citiesItem" @click="changeCity(item.name)">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </page>
</div>
</transition>

</template>

<script>
import {getCitiesData} from '../../services/homeService'
import Header from '../common/Header.vue'
export default {
    components:{
        Header
    },
    data () {
        return {
            citiesData:{}      
        }
    },
    methods:{
        back_home(){
            this.$router.back() ;
        },
        changeCity(city){
            this.$store.commit('changeCityName',city)
            this.back_home()
        },
        changeHeight(key){
            // console.log(this.$refs[key][0].offsetHeight)
            this.$center.$emit('toScroll',this.$refs[key][0].offsetTop)
        }
    },
    mounted(){
        this.$store.commit('changeHeaderTitle','请选择城市')
        getCitiesData().then(res=>{
            this.citiesData = res ;
        })
    }
}
</script>

<style scoped>
#location_page{
    top: 50px;
    bottom: 0;
    background: #f5f5f5;
    font-size: 16px;
    font-size: 16px;
}
#location{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: white;
    z-index: 5;
}
.citiesKey{
    line-height: 50px;
    padding-left: 15px;
    color: #666;
}
.citiesItem{
    line-height: 50px;
    background: white;
    padding-left: 15px;
    margin-top: 3px;
}
.slideInRight,.slideOutRight{
    animation-duration: 200ms;
}

.cityNav{
    position: fixed;
    top: 60px;
    right: 30px;
    z-index: 10;
}
</style>
