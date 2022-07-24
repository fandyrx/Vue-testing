<template>
  <div>
        home组件
        <button @click="handler">测试Store 上下文</button>
        <hr>
        {{$store.state.msg}}
  </div>
</template>

<script>
export default {
  name:'Home',
  methods:{
    handler(){
      //用于测试触发事件，即打印接受的参数，上下文是什么
      this.$store.dispatch('actionsTest')
    }
  }
}
</script>

<style>

</style>