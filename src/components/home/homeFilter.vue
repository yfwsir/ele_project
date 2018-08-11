<template>
    <div id="homefilter">
        <ul class="filter">
            <li @click="activeSort()">综合排序</li>
            <li>距离最近</li>
            <li >品质联盟</li>
            <li @click="activeIance()">筛选<span class="iconfont icon-filter"></span></li>
        </ul>
        <div>
            <div class="sort" v-if="show" v-for="(item , index ) in filterList" :key="index">
                <p ref="in" @click="showSpan(index)">{{item.name}}<span v-if="isShow">√</span></p>
            </div>
            <div class="shade" v-if="show" @click="hidden()"></div>
        </div>
        <div v-if="showFilter">
            <div class="merchantservices">
                    <p>商家服务</p>
                    <ul>
                        <li 
                        v-for="(item, index) in merchantServicesList" :key="index"
                        @click="showvourablecolor()"
                        :class="actived"
                        >
                            {{item.name}}
                        </li>
                    </ul>
            </div>
            <div class="vourable">
                    <p>优惠活动</p>
                    <ul>
                        <li
                         v-for="(item , index ) in vourableServicesList" :key="index"
                        >
                        {{item.name}}
                        </li>
                        
                    </ul>
            </div>
            <div class="consumption">
                    <p>人均消费</p>
                    <ul>
                        <li><span></span>¥20以下</li>
                        <li><span></span>¥20-¥40</li>
                        <li><span></span>¥40-¥60</li>
                        <li><span></span>¥60-¥80</li>
                        <li><span></span>¥80-¥100</li>
                        <li><span></span>¥100以上</li>
                    </ul>
            </div>  
            <div class="buttonbox">
                <button>清空</button>
                <button @click="okBtn()">确定</button>
            </div>
            <div class="filtershade" @click="hidden()">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            isShow:false,
            showFilter:false,
            actived:'',
            filterList:[
                {name:'综合排序'},
                {name:'好评优先'},
                {name:'销量最高'},
                {name:'起送价最低'},
                {name:'配送最快'},
                {name:'配送费最低'},
                {name:'人均从低到高'},
                {name:'人均从高到低'}
            ],
            merchantServicesList:[
                
                    {name:'蜂鸟专送'},
                    {name:'品牌商家'},
                    {name:'食安保'},
                    {name:'新店'},
                    {name:'开发票'}
                
            ],
            vourableServicesList:[
                {name:'优惠活动'},
                {name:'特价商品'},
                {name:'下单立减'},
                {name:'赠品优惠'},
                {name:'下单返红包'},
                {name:'进店领红包'}
            ]
        }
    },
    methods:{
        activeSort(){
            if(this.show==1){
               this.show=false; 
            }else if(this.show==0){
                this.show=true;
            }
           this.showFilter=false;
        },
        hidden(){
            this.show=false;
            this.showFilter=false;
        },
        showSpan(){
            this.isShow=true;
            this.show=false;
        },
        activeIance(){
            if(this.showFilter==1){
               this.showFilter=false; 
            }else if(this.showFilter==0){
                this.showFilter=true;
            }
            this.show=false;
        },
        okBtn(){
            this.showFilter=false;
        },
        showvourablecolor(){
           this.actived='actived'
        }
    }
}
</script>

<style>
    #homefilter{
        width:100%;
        background: white;
    }
    .filter {
        display: flex;
        text-align: center;
        color:#b2b2b2;
        font-size:14px;
        border-bottom:1px solid #fbfbfb;
        line-height: 35px;
    }
    .filter  li {
        flex:1;
        line-height:40px;
    }
    .sort{
        margin-bottom: 6px;
    }
    .sort p{
        font-size:14px;
        color:#666666;
        height:40px;
        line-height:40px;
        text-indent: 2rem;
        position: relative;
        background: white;
    }
    .sort p span{
        position: absolute;
        right:20px;
        top:0;
        font-size:12px;
        font-weight: bold;
        color:#2596ff;
        background: white;
        z-index: 10;
    }
    .shade{
        height:260px;
        width:100%;
        background:#999;
        opacity:0.1;
        position: absolute;
        top:765px;
        background: white;
        z-index: 10;
    }
    .merchantservices, .vourable, .consumption{
        width:100%;
    }
    .merchantservices ul ,.vourable ul , .consumption ul{
        width:100%;
        font-size:12px;
        color:#7d7d7d;
        text-align: center;
        overflow: hidden;
    }
    .merchantservices ul li,.vourable ul li, .consumption ul li{
        float:left;
        width:30%;
        height:35px;
        line-height:35px;
        background:#fafafa;
        margin-left:10px;
        margin-top:5px;
    }
    .merchantservices p ,.vourable p , .consumption p{
        font-size:12px;
        color:#999999;
        margin-left:18px;
    }
    .buttonbox{
        display:flex;
        margin-top:10px;
    }
    .buttonbox button{
        width:50%;
        height:44px;
        border:none;
    }
    .buttonbox button:first-child{
        background:white;
        border-top:2px solid #f2f2f2;
    }
    .buttonbox button:last-child{
        background:#00d762;
    }
    .filtershade{
        height:150px;
        background:#999;
        opacity:0.1;
    }
   .merchantservices .actived{
        background:#edf5ff;
    }
</style>
