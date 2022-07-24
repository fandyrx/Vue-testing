import VueRouter from 'vue-router';
import Vue  from 'vue';
//1.引入VUE,VueRouter插件，等下使用


Vue.use(VueRouter);
//2.使用路由插件 


const routes= [

    ]



//3.创建新路由器
const router = new VueRouter({
  mode:'history',
    //4.配置路由组件关系
    routes
})





// 5.往外暴露，在入口文件main.js全局注册这个属性router

export default router