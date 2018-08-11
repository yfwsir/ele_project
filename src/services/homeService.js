import API from '../API/API'
import axios from 'axios'
export function getAutoplayData(){
    return new Promise((resolve,reject)=>{
        axios.get(
            '/restapi/shopping/openapi/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'
        ).then(response=>{
            //  console.log(response)
            let data =response.data[0].entries.map(item=>{
                    return{
                         imgname:item.name,
                         image_hash:item.image_hash,
                         id:item.id
                  }
           })
            resolve(data)
        }).catch(error=>{
            console.log('失败')
            console.log(error)
        })
    })
}
export function getScareBuyingData(){
    return new Promise((resolve,reject)=>{
        let reg = /\w*/g
        axios.get(
            '/restapi/shopping/openapi/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'
        ).then(response=>{
            //  console.log(response.data[1].entries)
            let data =response.data[1].entries.map(item=>{
                    return{
                         imgname:item.name,
                         image_hash:item.image_hash,
                         id:item.id,
                         description:item.description,
                         population:item.more.split(',')[3].match(reg)[4]
                    }
           })
            resolve(data)
        }).catch(error=>{
            console.log('失败')
            console.log(error)
        })
    })
}

//请求首页餐馆的信息
export function restaurantData(page){
    return new Promise(resolve=>{
        axios.get(API.RESTAURANTS_API,{
            params:{
                offset:page
            }
        }
        
    )
        .then(res=>{
            res.data.items.map(item=>{
                item.restaurant.isShow = false
            })
            // console.log(res.data.items)
            resolve(res.data.items)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}

// 请求搜索页面热点搜索的数据
export function hotSearchData(){
    return new Promise(resolve=>{
        axios.get('/restapi/shopping/v3/hot_search_words?latitude=18.25248&longitude=109.512093'
        )
        .then(res=>{
            // console.log(res.data)
            resolve(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}


// 搜索关键字匹配的详情页数据
export function footDetailData(keyword,page){
    return new Promise(resolve=>{
        axios.get(API.FOODDETAIL_API,{
            params:{
                keyword:keyword,
                offset:page
            }
        })
        .then(res=>{
            // console.log(res.data.inside[0].restaurant_with_foods)
            res.data.inside[0].restaurant_with_foods.map(item=>{
                item.restaurant.isShow = false
                item.isMore = false
            })
            resolve(res.data.inside[0].restaurant_with_foods)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}



// 首页轮播进去的详情页的特卖数据
export function shopDetailSaleData(){
    return new Promise(resolve=>{
        axios.get('/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=18.25248&longitude=109.512093'
        )
        .then(res=>{
            // console.log(res.data)
            resolve(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}


// 首页轮播进去的美食详情页顶部导航id
export function shopNavData(id){
    return new Promise(resolve=>{
        axios.get(API.SHOPNAV_API,{
            params:{
                entry_id : id
            }
        })
        .then(res=>{
            // console.log(res)
            resolve(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}


// 首页轮播进去的详情页商家列表数据
export function shopDetailData(id,page){
    return new Promise(resolve=>{
        axios.get(API.SHOPDETAILDATA_API,
            {
                params:
                    {
                        offset : page,
                        restaurant_category_ids:id
                    }
            }
        )
        .then(res=>{
            res.data.items.map(item=>{
                item.restaurant.isShow = false
            })
            // console.log(res.data.items)
            resolve(res.data.items)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}

//请求卖座网接口的城市信息
export function getCitiesData(){
    return new Promise((resolve)=>{
        axios.get(API.CITIES_DATA_API,{
            params:{
                __t:new Date().getTime()
            }
        })
        .then(res=>{
            // console.log('请求成功')
            // console.log(res)
            let data = res.data.data.cities
            let citiesData = {}
            let citiesDataSort = {}
            data.map(item=>{
                let letter = item.pinyin[0]
                if(!citiesData[letter]){
                    citiesData[letter] = []
                }
                citiesData[letter].push(item)
            })

            let arr = []
            for(let key in citiesData){
                arr.push(key)
            }
            arr = arr.sort()
            // console.log(arr)
            for(let i = 0;i < arr.length;i++){
                citiesDataSort[arr[i]] = citiesData[arr[i]]
            }
            // console.log(citiesDataSort)
            resolve(citiesDataSort)
        })
        .catch(error=>{
            console.log('请求错误')
            console.log(error)
        })
    })
}

//请求商家详情
export function shopData(id){
    return new Promise(resolve=>{
        axios.get(API.SHOP_DETAIL_API,
            {
                params:
                    {
                        restaurant_id:id
                    }
            }
        )
        .then(res=>{
            // console.log(res.data)
            resolve(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}