<template>
    <div id="order">
        <Header />


        <p  class="product_title">
            <span v-for="(item,index) in listTitle" :key="index+'a'">{{item}}</span>
        </p>
    <page id="order_page">
        <!-- 渲染的商品列表 -->
        <ul>
            <li v-for="(item,index) in $store.state.orderData" :key="index" class="product_list">
                <span class="order_name">{{item.name}}</span>
                <span class="order_num">
                    <span class="order_dec" @click="orderDec(index)"> - </span>
                    <span>{{item.num}}</span> 
                    <span class="order_add" @click="orderAdd(index)"> + </span>
                </span>
                <span class="order_price">{{item.price | formateSale}}</span>
                <span class="order_total_price">{{item.num * item.price | formateSale}}</span>
                <span class="order_del" @click="orderDel(index)">删除</span>
            </li>
        </ul>

        <!-- 应付的总额 -->
        <div class="orderPay">
        <p class="order_pay">
            应付：
            <span class="payPrice">{{payPrice | formateSale}}</span>  
            元
        </p>
        </div>
    </page>
    </div>
</template>

<script>
import Header from '../components/common/Header.vue'
export default {
    components:{
        Header
    },
    data () {
       return {
           listTitle:['商品名','数量','单价','总价','操作'],
       }
   },
   computed:{
    //    计算总价格
       payPrice(){
           var totalPrice = 0;
           this.$store.state.orderData.map(item=>{
               totalPrice += item.num * item.price
           })
           return totalPrice
       }
   },
   methods:{
    //    删除按钮的方法
       orderDel(index){
           this.$store.state.orderData.splice(index,1)
       },
    //    减数量的方法
       orderDec(index){
            if(this.$store.state.orderData[index].num<=0){
                this.$store.state.orderData[index].num = 0;
            }else{
                this.$store.state.orderData[index].num--
            }
       },
        // 加数量的方法
       orderAdd(index){
           this.$store.state.orderData[index].num++
       }
   },
   created(){
        this.$store.commit('changeHeaderTitle','订单')
   }
}
</script>

<style scoped>
.orderPay{
    overflow: hidden;
    padding-bottom: 50px;
}
#order_page{
    top: 100px;
    overflow: hidden;
}
.product_list,.product_title{
    display: flex;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
}
.product_title{
    line-height: 40px;
    background: rgb(35, 149, 255);
    color: white;
}
.order_name{
    flex: 2;
    padding: 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.order_num,.order_price,.order_total_price,.order_del{
    flex: 1;
}
.product_title span{
    flex: 1;
}
.product_title span:nth-of-type(1){
    flex: 2;
}
.order_total_price{
    color: #f07373;
}
.order_pay{
    float: right;
    margin-right: 20px;
    margin-top: 20px;
}
.payPrice{
    color: #f07373;
    font-size: 24px;
}
.order_num{
    display: flex;
}
.order_num span{
    flex: 1;
}

</style>
