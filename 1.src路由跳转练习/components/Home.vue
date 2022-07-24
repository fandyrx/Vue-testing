<template>
    <div>
         <router-link tag="button" to='/home/test'>test</router-link>&nbsp;
         <router-link tag="button" to='/home/second'>第二列表</router-link>&nbsp;
  
          <router-view></router-view>
      
          
          

    </div>
</template>

<script>
import testComponents from './test.vue'

export default {
  name:'Home',
  data() {
    return {
      path:'/home/test'
    }
  },
 
  components:{
    testComponents,

  },
  methods:{
    handler(){
      this.$router.push('/test')
    }
  },
  created(){
      console.log('homeCreated');
  },
 
  destroyed() {
    console.log('home destroyed')
  },

  activated() {
       console.log(' activated');
       this.$router.push(this.path)
  },
  // deactivated(){
  //   console.log(' deactivated');
  //   this.path = this.$route.path
  // }
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path
    next();
    //路由跳转前，将路径保存到本组件数据 ，下次跳转回来时跳转路径
    //为activated推入路径 ，前提是  需要用keepAlive保持路由展示组件不重复创造
  }
}
</script>

<style>

</style>