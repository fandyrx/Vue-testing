<template>
   <div>
      第一个列表
      <hr>
      <ul>
      <li v-for="(value,index) in todayNews" :key="index">{{value}}</li>
     </ul>
   </div>
</template>

<script>
export default {
    name:'testComponent',
    data(){
    return{
       todayNews:['新闻1','新闻2','新闻3','新闻4','新闻5']
    }
  },
}
</script>

<style>

</style>