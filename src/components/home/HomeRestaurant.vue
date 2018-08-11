<template>
    <div id="homeRestaurants" @click="goShop(item)">
        <div class="homeRestaurant">
            <div class="homeRestaurant_img">
                <img :src="item.restaurant.image_path | formateImg">
            </div>
            <div class="homeRestaurant_detail">
                <span class="protect" v-if="item.restaurant.supports"
                         v-for="(icon,index) in item.restaurant.supports" :key="index + '11'">
                    {{icon.icon_name}}
                </span>
                <span class="protect" v-if="item.restaurant.recommend.is_ad">
                    {{item.restaurant.recommend.reason}}
                </span>
                <p class="item_restaurant_name">
                    {{item.restaurant.name}}
                </p>
                <span class="fengniao" v-if="item.restaurant.delivery_mode">{{item.restaurant.delivery_mode.text}}</span>
                <p>
                    <span>{{item.restaurant.rating}}</span> 
                    <span>月售{{item.restaurant.recent_order_num}}份</span>
                </p>
                <span class="distance_time">{{item.restaurant.distance}}|{{item.restaurant.order_lead_time}}分钟</span>
                <p>
                    <span>￥{{item.restaurant.float_minimum_order_amount}}起送</span> |
                    <span>{{item.restaurant.piecewise_agent_fee.tips}}</span>
                </p>
                <p class="item_restaurant_support_tags">
                    <span v-for="(item,index) in item.restaurant.support_tags" :key="index">
                        {{item.text}}
                    </span>
                </p>
                 <span class="activities_length" @click.stop="showActive()">{{item.restaurant.activities.length}}个活动</span>
                <p v-for="(tab,index) in item.restaurant.activities" :key="index+'k'"
                         v-if="index<2 || item.restaurant.isShow==true" class="item_restaurant_act">
                    <span :style="{backgroundColor:'#' + tab.icon_color,color:'#fff'}">{{tab.icon_name}}</span>
                    <span>{{tab.tips}}</span>
                </p>

                <!-- 如果有foods的数据就渲染显示 -->
                <div v-if="item.foods">
                    <ul class="item_foods_ul">
                        <li v-for="(ele,key) in item.foods" :key="key+'qw'" v-if="key<3" class="item_foods_top">
                            <img :src="ele.image_path | formateImg" alt="">
                            <p class="item_foods_top_name">{{ele.name}}</p>
                            <p class="item_foods_top_price">￥{{ele.price}}</p>
                        </li>
                    </ul>

                    <div v-for="(ele,key) in item.foods" :key="key+'q'" class="item_foods" 
                            v-if="key > 2 && item.isMore==true">
                        <p class="item_foods_detail">
                            <span class="item_foods_name">{{ele.name}}</span>
                            <span class="item_foods_count">月售{{ele.satisfy_rate}}份</span>
                        </p>
                        <p class="item_foods_price">￥{{ele.price}}</p>

                    </div>

                    <!-- 搜索进去的商家列表 -->
                    <p v-if="item.foods.length > 3" class="seeMore" @click.stop="showMore">
                        <span v-text="seeMore"></span>
                        <span v-if="item.isMore==false">{{item.foods.length - 3}}个</span> 
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:Object
    },
    data () {
        return {
            seeMore:'查看其他相关商品'      
        }
    },
    methods:{
        showActive(){
            // 商家优惠活动的展开收起
            this.item.restaurant.isShow = !this.item.restaurant.isShow ;
        },
        showMore(){
            // this.item.isMore = !this.item.isMore ;
            if(this.item.isMore == false){
                this.item.isMore = true
                this.seeMore = '收起'
            }
            else if(this.item.isMore == true){
                this.item.isMore = false
                this.seeMore = '查看其他相关商品'
            }
        },
        goShop(item){
            // this.$router.push({path:'/shop',query:{data:item}})
            this.$router.push({path:'/shop'})
            // console.log(this.$route)
            this.$store.commit('changeShopData',item)
        }
    },
}
</script>

<style scoped>
#homeRestaurants{
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 12px;
    color: #333;
}
.homeRestaurant{
    display: flex;
    padding: 10px 0;
    box-sizing: border-box;
}
.homeRestaurant_img{
    flex: 1;
    float: left;
}
.homeRestaurant_img img{
    width: 100%;
    border: 1px solid rgba(0,0,0,.08);
}
.homeRestaurant_detail{
    flex: 3;
    margin-left: 15px;
    float: left;
}
.item_restaurant_name{
    font-size: 16px;
    font-weight: 700;
}
.item_restaurant_support_tags span{
    padding: 2px;
    margin-right: 5px;
    color: rgb(102, 102, 102);
    border: solid 1px rgb(221, 221, 221);
}
.item_restaurant_act .p5_span1{
    display: inline-block;
    width: 160px;
}
.item_restaurant_act{
    display: inline-block;
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.homeRestaurant_detail p{
    margin-bottom: 10px;
    min-height: 12px;
    /* line-height: 18px; */
}
.activities_length,.fengniao,.protect,.distance_time{
    float: right;
    /* display: inline-block; */
    min-height: 12px;
}
.fengniao{
    background: #0af;
    color: #fff;
}
.protect{
    margin-left: 5px;
}
.item_foods{
    font-size: 12px;
    overflow: hidden;
}
.item_foods_name{
    float: left;
}
.item_foods_count{
    float: right;
}

.item_foods_ul{
    display: flex;
    /* width: 100%; */
}
.item_foods_top p{
    width: 80px;
    /* width: 33%; */
    margin-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item_foods_top_price,.item_foods_price{
    color: #ff5339;
    font-size: 14px;

}

.seeMore{
    text-align: center;
}
</style>
