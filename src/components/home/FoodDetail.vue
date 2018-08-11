<template>
    <div class="food_detail">
        <div class="food_detail_left">
            <div class="food_detail_img">
                <img :src="data.image_path | formateImg" alt="">
            </div>
        </div>
        <div class="food_detail_right">
            <p class="food_right_name">{{data.name}}</p>
            <p class="food_right_des">{{data.description}}</p>
            <p class="food_right_count">月售{{data.month_sales}} 好评率{{data.satisfy_rate}}%</p>
            <p class="food_right_sale">
                <span v-if="data.activity">
                    {{data.specfoods[0].price / data.specfoods[0].original_price * 10 | formateSale}}折
                    {{data.activity.applicable_quantity_text}}  
                </span>       
            </p>
            <p>
                <span class="food_right_price">￥{{data.specfoods[0].price}}</span>
                <span v-if="data.activity" class="food_right_originprice"><del>￥{{data.specfoods[0].original_price}}</del></span>
            </p>
            <p class="food_right_btn">
                <span class="food_right_dec" @click="rightDecClick" v-if="right_one_count>0"> - </span>
                <input type="number" class="food_right_num" v-model.number="right_one_count" v-if="right_one_count>0">
                <span class="food_right_add" @click="rightAddClick"> + </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:["data"],
    data () {
        return {
            right_one_count:0        
        }
    },
    methods:{
        rightDecClick(){
            if(this.right_one_count<=0){
                this.right_one_count = 0;
            }else{
                this.right_one_count--
            }
            // 把数据添加到全局的订单数据中
            this.$store.commit('changeOrderData',{
                name:this.data.name,
                num:this.right_one_count,
                price:this.data.specfoods[0].price,
            })
        },
        rightAddClick(){
            this.right_one_count++
            this.$store.commit('changeOrderData',{
                name:this.data.name,
                num:this.right_one_count,
                price:this.data.specfoods[0].price,
            })
            console.log(this.$store.state.orderData)
        }
    },
    mounted(){
        // 判断该商品在订单的数据中是否已经存在，如果存在取数据中的数量
        this.$store.state.orderData.map(item=>{
            if(this.data.name == item.name){
                this.right_one_count = item.num
            }
        })
    }
}
</script>

<style scoped>
.food_detail{
    margin: 15px 0;
}
.food_detail_left{
    float: left;
    margin-right: 5px;
}
.food_detail_right{
    position: relative;
    min-height: 100px;
}
.food_detail_right p{
    margin-top: 5px;
}
.food_detail_img{
    width: 100px;
}
.food_detail_img img{
    width: 100%;
}
.food_right_des,.food_right_count,.food_right_name{
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #999;
}
.food_right_name{
    font-size: 14px;
    font-weight: 700;
    color: #333;
}
.food_right_sale{
    color: #f07373;
    font-size: 12px;
    min-height: 15px;
}
.food_right_price{
    font-size: 14px;
    color: #f07373;
}
.food_right_originprice{
    font-size: 12px;
    color: #999;
}
.food_right_add{
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(35, 149, 255);
    color: white;
    text-align: center;
    line-height: 20px; 
    float: right
}
.food_right_dec{
    display: block;
    box-sizing: border-box;
    float: left;
    width: 20px;
    height: 20px;
    border: solid 1px rgb(35, 149, 255);
    color: rgb(35, 149, 255);
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
}
.food_right_btn{
    /* float: right; */
    position: absolute;
    right: 0;
    bottom: 0;
}
.food_right_num{
    border: 0;
    outline: none;
    width: 15px;
    height: 15px;
    margin: 0 5px;
    position: relative;
    top: -3px;
    text-align: center;
}
</style>
