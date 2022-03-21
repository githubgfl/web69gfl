import React from "react"
import { ProjectListScreen } from "screens/project-list"
import { UserAuth } from "context/auth-context"
import styled from "@emotion/styled" 
import { Row } from './components/lib'
import {ReactComponent as  SoftwareLogo} from './assets/software-logo.svg'
import {Dropdown,Menu,Button } from 'antd'
import {Route, Routes,Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom"
 import {ProjectScreen} from './screens/project'
import {resetRoute} from './utils'

export const AuthenticatedApp=()=>{
  // const value:any=undefined;
    // const {logout,user}=UserAuth()
    return <Container>
         < Zhuye/>
       <Main>
       <Router> 
       <Routes>
        
          <Route  path={"projects"} element={<ProjectListScreen />} />
          <Route path={"projects/:projectId/*"} element={<ProjectScreen />} />
          <Route index  element={<ProjectListScreen />} />

           {/* <Navigate to={window.location.pathname+'/projects'}/> */}
        </Routes>
         
        </Router> 
           </Main>
   
</Container>
}

export const Zhuye=()=>{
  const {logout,user}=UserAuth()
  return (
    <Header between={true}>
    {/* {value.notExist} */}
   <HeaderLeft gap={true}>
    <Button type="link" onClick={resetRoute}>
      <SoftwareLogo  width={'18rem'} color={'reb(38,132,255)'}/></Button>
     
      <h3>项目</h3>
      <h3 >用户</h3> 
     </HeaderLeft>
      <HeaderRight> 
  <Dropdown overlay={<Menu>
  <Menu.Item key={'logout'}>
    {/* <a onClick={logout}>登出</a> */}
    <Button onClick={logout} type={"link"}>登出</Button>
  </Menu.Item>

  </Menu>}>
    <Button type={"link"} onClick={e=>e.preventDefault()}>
     Hi,{user?.name}
    </Button>
  </Dropdown>
       </HeaderRight>
</Header>
  )
}

const Container=styled.div`
display: grid;
grid-template-rows:6rem 1fr ;
height: 100vh;
grid-template-areas: 'header' 'main';
`

const Header=styled(Row)`
/* grid-area: header; */
/* justify-content: space-between; */
padding: 3.2rem;
box-shadow: 0 0 5px 0 rgba(0,0,0,0.1) ;
z-index: 1;


`
const HeaderLeft=styled(Row)`

`
const HeaderRight=styled.div`

`

const Main=styled.main`
/* grid-area:main; */
`


