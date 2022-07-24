import VueRouter from 'vue-router';
import Vue  from 'vue';
//1.引入VUE,VueRouter插件，等下使用
//引入 配置路由
import Home from "@/components/Home"
import test from "@/components/test"
import about from "@/components/about"
import second from "@/components/second"

Vue.use(VueRouter);
//2.使用路由插件 


const routes= [
  {
    path:'',
    redirect:"/home",
    
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'test',
        component:test,
        meta:{
          title:'测试'
        }
      },
      {
        path:'second',
        component:second,
        meta:{
          title:'第二列表'
        }
      }
    ]
  },
  
  {
    path:'/about',
    component:about,
    meta:{
      title:'关于'
    }
  }

]


//3.创建新路由器
const router = new VueRouter({
  mode:'history',
    //4.配置路由组件关系
    routes
})

//全局守卫  
//前置守卫guard
router.beforeEach((to,from,next)=>{
  //from =》to:route ，next()放行。 
  document.title = to.matched[0].meta.title
  //跳转时，切换页面标题 ，根据跳转路由的元信息决定
 
 

  next()
})


// 5.往外暴露，在入口文件main.js全局注册这个属性router

export default router