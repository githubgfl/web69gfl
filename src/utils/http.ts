import qs from "qs";
import { UserAuth } from "context/auth-context";
import {logout} from '../auth-provider'
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit{
         token?:string;
         data?:object

}
export const http=async(endpoint:string,{data,token,headers,...customConfig}: Config={})=>{
    const config = {
        method: "GET",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": data ? "application/json" : "",
        },
        ...customConfig,
      };
      if (config.method.toUpperCase() === "GET") {
        endpoint += `?${qs.stringify(data)}`;
      } else {
        config.body = JSON.stringify(data || {});
      }
  
    return window.fetch(`${apiUrl}/${endpoint}`,config)
       .then(async (response)=>{
        if( response.status===401){
              await logout()
              window.location.reload()
              return Promise.reject({message:"请重新登录"})
        }
        const data=await response.json()
        if(response.ok){
            return data
        }else{
            return Promise.reject(data)
        }
    })
}
export const useHttp=()=>{
    const {user}=UserAuth()
    return (...[endpoint,config]:Parameters<typeof http>)=>
        http(endpoint,{...config,token:user?.token});
    
}


//联合类型
// string|number

// type sunzi=string|number
//跟interface基本一样
// 区别
// 可以在这里写联合类型
// 也可以写   utility用法
// Parameters<typeof http>

// type abc={
//     name:string,
//     age:number
// }
// const xiaoming:abc={name:"xiaoming",age:19}

// const xiaoming:Partial<abc>={name:"xiaoming",age:19}  变成可选的
// const xiaoming:Omit<abc,'name'>={age:19}  删除
//type PersonOnlyName=Pick<abc,'name'>  挑选出,组成新的接口
//keyof遍历  键值
// type per=keyof abc

// type BBc=Exclude<per,'name'>   过滤
