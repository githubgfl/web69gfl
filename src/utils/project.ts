import { cleanObject } from "utils";
import { Project } from "screens/project-list/list";
import {  useEffect } from "react";
import { useAsync } from "utils/use-async";
import {useHttp} from './http'
export const useProjects=(param?:Partial<Project>)=>{
    const {run,...result}=useAsync<Project[]>()
    const client=useHttp();
    const fetchProjects=()=> client('projects',{data:cleanObject(param||{})})
    useEffect(() => {
     run(fetchProjects(),{
         retry:fetchProjects
     });
        
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

export const useAddProject=()=>{
    const {run,...asyncResult}=useAsync()
 const client=useHttp()
 const metate=(params:Partial<Project>)=>{
    return run(client(`projects/${params.id}`,{
        data:params,
        method:'POST'

    }))}

    return {
        metate,
        ...asyncResult
    }

}