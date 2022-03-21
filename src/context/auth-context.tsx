import React, { useState,ReactNode } from "react";
import * as auth from '../auth-provider'
import {User} from 'screens/project-list/search-panel'
import { http } from "utils/http";
import { useMount } from "utils";
import { useAsync } from "utils/use-async";
import { FullPageErrorFallback, FullPageLoading } from "components/lib";
interface AuthForm {
    username: string;
    password: string;
}
const AuthContext = React.createContext<{user:User|null,
  register:(from:AuthForm)=>Promise<any>,
  login:(form:AuthForm)=>Promise<any>,
  logout:()=>Promise<void>,
}|undefined>(undefined)

AuthContext.displayName = 'AuthContext';
const bootstrapUser=async()=>{
    let user=null;
   const token=auth.getToken()
   if(token){
       const data=await http('me',{token})
       user=data.user
   }
   return user
}



export const AuthProvider = ({children}:{children:ReactNode}) => {
    const{data:user,error,isLoading,isIdle,isError,run,setData:setUser}=useAsync<User|null>()

   
    const login = (from: AuthForm) => auth.login(from).then(setUser)
    const register = (from: AuthForm) =>auth.register(from).then(setUser)
    const logout=()=> auth.logout().then(()=>setUser(null))
     useMount(()=>{
   run(bootstrapUser()) 
      });
      if(isIdle||isLoading){
          return <FullPageLoading/>

      }
      if(isError){
          return <FullPageErrorFallback error={error}/>
      }
     return <AuthContext.Provider children={children} value={{user,login,register,logout}}></AuthContext.Provider>
    
}

export const UserAuth=()=>{
    const context=React.useContext(AuthContext)
    if(!context){
        throw new Error("出错了")
    }
    return context
}