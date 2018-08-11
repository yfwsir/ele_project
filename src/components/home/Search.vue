<template>

    <div class="search">

        <div class="search_header">
            <div class="search_header_left" @click="router_back">
                <i class="iconfont icon-icon"></i>
            </div>
            <div class="search_header_center" ref="inp">
                <i class="iconfont icon-search"></i>
                <input type="text" v-model="inp" placeholder="输入商家商品名称">
            </div>
            <div class="search_header_right" @click="goFoodDetail(inp)">
                搜索
            </div>
        </div>

        <home-filter v-if="isShowRestaurant == true"></home-filter>

        <page id="search_page" :onScroll="pageScrollY" ref="page1">
            
            <!-- 渲染历史搜索的数据 -->
            <div class="search_main" v-if="isShowRestaurant == false && $store.state.historySearch.length > 0">
                <p>历史搜索</p>
                <span v-for="(item,index) in $store.state.historySearch" :key="index"
                        class="historySearch" @click="goFoodDetail(item)">
                    {{item}}
                </span>
            </div>

            <!-- 渲染热点搜索的数据 -->
            <div class="search_main" v-if="isShowRestaurant == false">
                <p>热点搜索</p>
                <span v-for="(item,index) in hotSearchData" :key="index"
                        class="hotsearch" @click="goFoodDetail(item.search_word)">
                    {{item.search_word}}
                </span>
            </div>

            <!-- 根据关键词请求回来对应数据的渲染 -->
            <home-restaurant v-for="(item,index) in foodDetailData" :key="index" 
                :item="item" v-if="isShowRestaurant == true">
            </home-restaurant>
        </page>
    </div>

</template>

<script>
import {hotSearchData,footDetailData} from '../../services/homeService'
import HomeRestaurant from './HomeRestaurant.vue'
import HomeFilter from './homeFilter.vue'
export default {
    components:{
        HomeRestaurant,
        HomeFilter
    },
    data () {
        return {
            hotSearchData:[],
            foodDetailData:[],
            isShowRestaurant:false,
            inp:'',
            isCanGetData:true,
            page:0,
            keyword:''
        }
    },
    methods:{
        goFoodDetail(keyword){
            // 如果没有输入，不响应
            if(!keyword){
                return ;
            }
            this.keyword = keyword
            this.inp = keyword
            this.isShowRestaurant = true ;
            footDetailData(keyword,this.page).then(res=>{
                this.foodDetailData = res;
            })

            // 把搜索的keyword值添加到历史搜索的数据中
            this.$store.commit('changeHistorySearch',keyword)
            
        },
        pageScrollY(y){
            // 实现上滑加载更多
            if(y<80 && this.isCanGetData){
                // console.log(1)
                this.isCanGetData = false;
                this.page += 8
                footDetailData(this.keyword,this.page).then(res=>{
                    this.foodDetailData = [...this.foodDetailData,...res] ;
                    this.$nextTick(()=>{
                        this.$refs.page1.refreshScroll();
                        this.isCanGetData = true;
                    })
                })
            }
        },
        router_back(){
            this.$router.back()
        }
    },
    mounted(){
        // 获取热点搜索的数据
        hotSearchData().then(res=>{
            this.hotSearchData = res;
        })
        
    }
}
</script>

<style scoped>
#search_page{
    top: 74px;
    bottom: 0;
}
.search{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background: white;
    z-index: 5;
}
.search_header{
    width: 100%;
    height: 44px;
    display: flex;
    box-sizing: border-box;
    padding-top: 10px;
}
.search_header_center{
    flex: 6;
    background: #f8f8f8;
    box-sizing: border-box;
    padding: 5px;
}
.search_header_center input{
    width: 230px;
    border: 0;
    outline: none;
    background: #f8f8f8;
}
.icon-icon{
    font-size: 18px;
    flex: 1;
    line-height: 34px;
    margin: 10px;
}
.search_header_right{
    font-size: 18px;
    flex: 1;
    line-height: 34px;
}
.icon-search{
    margin:0 5px;
}

.search_main{
    padding: 15px;
    box-sizing: border-box;
}
.search_main p{
    font-size: 20px;
    font-weight: 700;
    margin-top: 30px;
}
.hotsearch,.historySearch{
    display: inline-block;
    padding: 10px;
    font-size: 14px;
    background: #f8f8f8;
    margin-right: 10px;
    margin-top: 20px;
    border-radius: 8px;
    color: #666;
}
</style>
