import { cleanObject } from "utils";
import { Project } from "screens/project-list/list";
import {  useEffect } from "react";
import { useAsync } from "utils/use-async";
import {useHttp} from './http'
import { Retryer } from "react-query/types/core/retryer";

export const useProjects=(param?:Partial<Project>)=>{
    const {run,...result}=useAsync<Project[]>()
    const client=useHttp();
    useEffect(() => {
     run(client('projects',{data:cleanObject(param||{})}))

    },[param]);
    return result
}

export const useEditProject=()=>{
    const {run,...asyncResult}=useAsync()
 const client=useHttp()
const metate=(params:Partial<Project>)=>{
    return run(client(`projects/${params.id}`,{
        data:params,
        method:'PATCH'

    }))}

    return {
        metate,
        ...asyncResult
    }

}