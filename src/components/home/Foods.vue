<template>
    <div class="food_list">
        <div class="food_img">
            <img :src="data.image_path | formateImg" alt="">
        </div>
        <p class="food_name">{{data.name}}</p>
        <p class="food_count">月售{{data.month_sales}} 好评率{{data.satisfy_rate}}%</p>
        <p class="food_btn">
            <span class="food_dec" @click="decClick" v-if="one_count>0"> - </span>
            <input type="number" class="num_count" v-model.number="one_count" v-if="one_count>0">
            <span class="food_add" @click="addClick"> + </span>
        </p>
        <p><span class="food_price">￥{{data.specfoods[0].price}}</span></p>
    </div>
</template>

<script>
export default {
    props:["data"],
    data () {
        return {
            one_count:0,
            obj:{}
        }
    },
    methods:{
        addClick(){
            // 数量加按钮的事件
            this.one_count++
            this.$store.commit('changeOrderData',{
                name:this.data.name,
                num:this.one_count,
                price:this.data.specfoods[0].price,
            })
            // console.log(this.$store.state.orderData)
        },
        decClick(){
            // 数量减按钮的事件
            if(this.one_count<=0){
                this.one_count = 0;
            }else{
                this.one_count--
            }
            this.$store.commit('changeOrderData',{
                name:this.data.name,
                num:this.one_count,
                price:this.data.specfoods[0].price,
            })
            // console.log(this.$store.state.orderData)
        }
    },
    mounted(){
        // 判断该商品在订单的数据中是否已经存在，如果存在取数据中的数量
        this.$store.state.orderData.map(item=>{
            if(this.data.name == item.name){
                this.one_count = item.num
            }
        })
    }
}
</script>

<style scoped>
.food_list{
    width: 120px;
}
.food_list p{
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.food_img{
    width: 120px;
}
.food_img img{
    width: 100%;
}
.food_name{
    font-size: 14px;
    color: #333;
}
.food_count{
    font-size: 12px;
    color: #999;
    margin: 5px 0;
}
.food_price{
    font-size: 14px;
    color: rgb(255, 83, 57);
}
.food_btn{
    float: right;
}
.food_add{
    display: block;
    float: right;
    width: 20px;
    height: 20px;
    background: rgb(35, 149, 255);
    border-radius: 50%;
    text-align: center;
    color: white;
    line-height: 20px;
}
.food_dec{
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
.num_count{
    border: 0;
    outline: none;
    width: 15px;
    height: 15px;
    margin: 0 5px;
    position: relative;
    top: -1px;
    text-align: center;
}
</style>
