<template>
  <div id="home">
  
     <nav-bar class="home-nav"></nav-bar>
      <HomeSwiper :banners="banners"></HomeSwiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <FeatureView></FeatureView>
      <TabControl  class="tab-control" :titles="['流行','新款','精选']"></TabControl>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        
      
      </ul>
  </div>
</template>

<script>
//views
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from '@/views/home/childComponents/RecommendView'
import FeatureView from "@/views/home/childComponents/FeatureView"
//components
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl'

export default {
  
  name:'Home',
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar ,
    TabControl
  },
  data(){
    return{
       banners: [] ,
       recommends: [],
       goods: {
        'pop': {page: 0,list:[]},
        'news': {page: 0,list:[]},
        'sell': {page: 0,list:[]}
       }
    }
   
  },
  created(){
    //请求多个数据 轮播图，推荐
    this.$API.home.getHomeMultidata().then(res=>{
      this.recommends = res.data.recommend.list
        this.banners = res.data.banner.list
    })
    //请求商品数据
    this.$API.home.getHomeGoods('pop',1).then(res=>{
      console.log(res);
    })
  },
  
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  
}
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top:44px;
  }
</style>