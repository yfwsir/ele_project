// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import filters from './filter'
Vue.use(filters)
Vue.config.productionTip = false

// 引入过滤器，插件的形式
// import formateImg from './filter'
// Vue.use(formateImg);

//引入滚动容器视图
import Page from './components/common/Page.vue'
  // 全局组件名称，哪个组件
Vue.component('page',Page)

Vue.prototype.$center = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
