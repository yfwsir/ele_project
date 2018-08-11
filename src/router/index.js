import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Discover from '@/pages/Discover.vue'
import Order from '@/pages/Order.vue'
import Mine from '@/pages/Mine.vue'
import Search from '@/components/home/Search'
import Location from '@/components/home/Location'
import Shop from '@/components/home/Shop.vue'
import ShopDetail from '@/components/home/autoplayShop/ShopDetail'
import SaleList from '@/components/home/autoplayShop/SaleList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopdetail',
      name: 'shopdetail',
      component: ShopDetail
    },
    {
      path: '/shopdetail/sale',
      name: 'salelist',
      component: SaleList
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '**',
      redirect: '/home'
    },
  ]
})
