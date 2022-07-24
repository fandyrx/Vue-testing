<template>
  <div id="app">
     <!-- to 跳转路径， tag 切换显示类型(已弃用)， replace跳转模式，不可后退  -->

        <router-link to='/home'>首页</router-link>&nbsp;
        <router-link to='/about' replace>About</router-link>&nbsp;
        <hr>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
          
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
    custom{
      color:'red'
    }
</style>
