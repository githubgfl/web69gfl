
import { User } from "../screens/project-list/search-panel";
import { cleanObject } from "utils";
import { Project } from "screens/project-list/list";
import {  useEffect } from "react";
import { useAsync } from "utils/use-async";
import {useHttp} from './http'

export const useUsers=(param?:Partial<User>)=>{
      const client=useHttp();
      const {run ,...result}=useAsync<User[]>()
      useEffect(()=>{
            run(client('users',{data:cleanObject(param||{})}))
      },[param])   
      return result 
}