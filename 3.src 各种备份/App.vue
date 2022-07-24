<template>
  <div id="app">
      <router-view></router-view>
   
      <main-tab-bar></main-tab-bar>
          
  </div>
</template>

<script>

import MainTabBar from '@/components/mainTabBar'
// 测试用
import axios from 'axios'
import {request} from './api'

// request(
//   { //config
//   url:'/home/multidata',
//   },
//   res=>{
//     //success 回调
//     console.log(res,'success')
//   },
//   err=>{
//     // failure回调
//     console.log(err,'error');
//     }
// )
//promise用法  当请求封装为promise
request({
  url:'/home/multidata',
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})




export default {
  name: 'App',
  components: {
   
   MainTabBar
  }
}




// axios({
//   url:'http://123.207.32.32:8000/home/multidata',

// }).then(res=>{
//   console.log(res);
// })
</script>

<style>
   @import './assets/css/base';
 



  
</style>
