<template>
    <div>
      第二个列表
      <hr>
      <ol>
         <li v-for="(value,index) in todayNews" :key="index">{{value}}</li>
      </ol>
    </div>
</template>

<script>
export default {
  name:'Seconed',
   data(){
    return{
       todayNews:['李彪1','李彪2','新李彪3','张三4','李四5']
    }
   }
}
</script>

<style>

</style>