<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
    <div class="footer">
      <router-link to="/home" class="footer_item"><i class="iconfont icon-home"></i><p>首页</p></router-link>
      <router-link to="/discover" class="footer_item"><i class="iconfont icon-discover"></i><p>发现</p></router-link>
      <router-link to="/order" class="footer_item"><i class="iconfont icon-order"></i><p>订单</p></router-link>
      <router-link to="/mine" class="footer_item"><i class="iconfont icon-mine"></i><p>我的</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
}
.footer{
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  height: 49px;
  border-top: solid 1px #ccc;
  padding-top: 10px;
}
.footer_item{
  flex: 1;
  text-align: center;
  color: #8e8e93;
  font-size: 14px;
}
.footer_item.router-link-active{
  color: #0089dc;
}
</style>
