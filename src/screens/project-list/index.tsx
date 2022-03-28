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
import {ButtonNoPadding,Row} from "components/lib";
import {useDispatch} from 'react-redux'
import { projectListActions } from "./project-list-slice";
export const ProjectListScreen = () => {
  

  // const [param, setParam]=useUrlQueryParam(['name','personId'])
   
  // const projectsParam={...param,personId:Number(param.personId)||undefined}
const [param,setParam]=useProjectsSearchParams()
  useDocumentTitle('项目列表',false)
  const debouncedParam = useDebounce(param, 100);
  const {isLoading,error,data:list,retry}=useProjects(debouncedParam)
  const {data:users}=useUsers()

  const dispatch=useDispatch()
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
      <Row between={true}>
         <h1 >项目列表</h1>
         <ButtonNoPadding onClick={()=>dispatch(projectListActions.openProjectModal())} type={"link"}>
            创建项目
         </ButtonNoPadding>
      </Row>
     

      <SearchPanel users={users||[]} param={param} setParam={setParam} />
      {error?<Typography.Text type={'danger'}>{error.message}</Typography.Text>:null}
      <List   refresh={retry} users={users||[]}  loading={isLoading} dataSource={list||[]} />
    </Container>

  );
};
ProjectListScreen.whyDidYouRender=true

const Container=styled.div`
padding:3.2rem ;
`
