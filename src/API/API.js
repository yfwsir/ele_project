/*
接口功能：首页的商家列表
接口参数：latitude：
longitude：
offset=请求数据从第几个开始

&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5
*/
const RESTAURANTS_API = '/restapi/shopping/v3/restaurants?latitude=18.25248&longitude=109.512093&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5';


/*
接口功能：搜索页面的热点搜索
接口参数：
*/
const HOTSEARCH_API = '/restapi/shopping/v3/hot_search_words?latitude=18.25248&longitude=109.512093';


/*
接口功能：搜索关键字匹配的详情页
接口参数：keyword:搜索的关键字
        offset 数据开始的索引的位置
*/
const FOODDETAIL_API = '/restapi/shopping/v2/restaurants/search?limit=15&latitude=18.25248&longitude=109.512093&search_item_type=3&is_rewrite=1&extras[]=activities&extras[]=coupon&terminal=h5';



/*
接口功能：首页轮播进去的详情页特卖数据
接口参数：
*/
const SHOPDETAILSALE_API = '/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=18.25248&longitude=109.512093';




/*
接口功能：首页轮播进去的详情页导航和id数据
接口参数：entry_id:首页轮播每一项对应的ID
*/
const SHOPNAV_API = '/restapi/shopping/v2/foods_page/sift_factors?longitude=109.512093&latitude=18.25248&terminal=h5';



/*
接口功能： 首页轮播进去的详情页商家列表数据
接口参数：restaurant_category_ids:通过传入的id这个数组去请求数据
            offset=请求的第几条，8条一次
*/
const SHOPDETAILDATA_API = '/restapi/shopping/v3/restaurants?latitude=18.25248&longitude=109.512093&keyword=&limit=8&extras[]=activities&extras[]=tags&terminal=h5&rank_id=407e826fbca445d798524395c1bc4d7e&brand_ids[]=';


/*
接口功能：卖座网请求城市的信息
接口参数：__t:时间戳 
*/
const CITIES_DATA_API = '/v4/api/city';


//接口功能 ：商家详情
    // 接口参数： restaurant_id 商家的id
// https://restapi.ele.me/shopping/v2/menu?restaurant_id=1334126
const SHOP_DETAIL_API = '/shopping/v2/menu'


// 商家评论：
// https://restapi.ele.me/ugc/v2/restaurants/1334126/ratings/tags


export default {
    RESTAURANTS_API,
    HOTSEARCH_API,
    FOODDETAIL_API,
    SHOPDETAILSALE_API,
    SHOPNAV_API,
    SHOPDETAILDATA_API,
    CITIES_DATA_API,
    SHOP_DETAIL_API
}