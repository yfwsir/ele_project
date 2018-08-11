import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        headerTitle : '',//头部显示的标题
        cityName:'正在定位...',//定位的城市地址
        shopData:{},//点击商家列表进入商家详情页时存取的点击商家的数据
        orderData:[],//订单页面的数据
        isAdd:true, //加入订单时判断重复是否添加的锁
        historySearch:[],//历史搜索的数据
    },
    mutations:{
        changeHeaderTitle(state,params){
            state.headerTitle = params ;
        },
        changeShopData(state,params){
            state.shopData = params ;
        },
        changeCityName(state,params){
            state.cityName = params ;
        },
        changeHistorySearch(state,params){
            // 判断是否已经存在，存在的话删除并在数组的最前面添加传过来的数据
            state.historySearch.map((item,index)=>{
                if(item == params){
                    state.historySearch.splice(index,1)
                }
            })
            state.historySearch.unshift(params) ;
        },
        changeOrderData(state,params){
            state.isAdd = true
            // 判断是否已经存在，存在了的话更改传过来的数量，不添加新的数据
            state.orderData.map(item=>{
                if(params.name == item.name){
                    state.isAdd=false
                    item.num = params.num
                }
            })
            if(state.isAdd == true){
                state.orderData.push(params)
            }
        }
    }
})

export default store