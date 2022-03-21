import React from "react";
import List from "./list";
import {useHttp} from '../../utils/http'
import SearchPanel from "./search-panel";
import { cleanObject, useMount, useDebounce, useDocumentTitle } from "utils";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {Typography}from 'antd'
import {Project} from './list'
import { useAsync } from "utils/use-async";
import {useProjects} from 'utils/project'
import { useUsers } from "utils/user";
import {useUrlQueryParam} from 'utils/url'
import { useProjectsSearchParams } from "./util";
export const ProjectListScreen = () => {
  

  // const [param, setParam]=useUrlQueryParam(['name','personId'])
   
  // const projectsParam={...param,personId:Number(param.personId)||undefined}
const [param,setParam]=useProjectsSearchParams()
  useDocumentTitle('项目列表',false)
  const debouncedParam = useDebounce(param, 100);
  const {isLoading,error,data:list}=useProjects(debouncedParam)
  const {data:users}=useUsers()
  // useEffect(() => {
  //  run(client('projects',{data:cleanObject(debouncedParam)}))
   
    
   
  //   //  fetch(
  //   //   `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
  //   // ).then(async (response) => {
  //   //   if (response.ok) {
  //   //     setList(await response.json());
  //   //   }
  //   // });
  //    // eslint-disable-line react-hooks/exhaustive-deps
  // }, [debouncedParam]);



  // useMount(() => {
  //   client('users').then(setUsers)
  // //   fetch(`${apiUrl}/users`).then(async (response) => {
  // //     if (response.ok) {
  // //       setUsers(await response.json());
  // //     }
  // //   });
  // });
  return (
    <Container>
      <h1 >项目列表</h1>
      <SearchPanel users={users||[]} param={param} setParam={setParam} />
      {error?<Typography.Text type={'danger'}>{error.message}</Typography.Text>:null}
      <List users={users||[]}  loading={isLoading} dataSource={list||[]} />
    </Container>

  );
};
ProjectListScreen.whyDidYouRender=true

const Container=styled.div`
padding:3.2rem ;
`
