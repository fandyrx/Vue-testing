import axios from 'axios';

// success,failure 是函数 ，哪来的?   
// 外部传入的成功时回调  调用success(res) ，把res数据 传给使用者 failure 同理
export function request(config){
     // 1.创建一个axios实例
     const service = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout: 5000
})

//发送网络请求
// 使用 axios（） 传入配置项  返回时promise 所以 可以直接then 接受返回的数据
//因为 axios(config) 返回就是promise 所以没必要再封装一层promise 可以直接使用，包装的用途，在于项目如果
//axios如果停用了，引入新框架时，只要重构这里，外包一层promise,其他发送请求的地方正常使用
 return service(config)  

//         return new Promise((resolve,reject)=>{
//              // 1.创建一个axios实例
//             const service = axios.create({
//             baseURL:'http://123.207.32.32:8000',
//             timeout: 5000
//   })

//   //发送网络请求
//   // 使用 axios（） 传入配置项  返回时promise 所以 可以直接then 接受返回的数据
//   service(config)
//   .then(
//     res=>{
//       resolve(res)
//       // success(res)
//     }
//   ).catch(err=>{
//     reject(err)
//     // failure(err)
//   })
// })
}