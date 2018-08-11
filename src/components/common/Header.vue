<template>
    <div class="main_heander">
        <div class="location_back" @click="back_home">
            <i class="iconfont icon-icon"></i>
        </div>
        <div class="location_header">
            <p class="select">{{$store.state.headerTitle}}</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back_home(){
            this.$router.back() ;
        }
    }
}
</script>

<style scoped>
.main_heander{
    position: relative;
    width: 100%;
    height: 50px;
}
.location_header{
    width: 100%;
    height: 50px;
    background: #0af;
}
.select{
    width: 100%;
    line-height: 50px;
    text-align: center;
    color: white;
    font-weight: 700;
}
.location_back{
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 16px;
    line-height: 50px;
    color: white;
}
</style>
