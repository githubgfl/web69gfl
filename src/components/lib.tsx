import styled from "@emotion/styled";
import {Spin,Typography,Button} from 'antd'
import { DevTools } from "jira-dev-tool";
import React from "react";
export const Row=styled.div<{
    gap?: number | boolean;
    between?: boolean;
    marginBottom?: number;
  }>`

display: flex;
align-items: center;
justify-content: ${props=> typeof props.between?'space-between':undefined};
margin-bottom: ${props=> props.marginBottom+'rem'};
> * {
    margin-top:  0 !important;
    margin-bottom: 0 !important;
    margin-right: ${props=> typeof props.gap==='number'?props.gap+'rem':props.gap?'2rem':undefined};
    
}`;

const Fullpage=styled.div`
     height:100vh ;
     width: 100vw;
     display: flex;
     justify-content: center;
     align-items: center;

`

export const FullPageErrorFallback=({error}:{error:Error|null})=>
  < Fullpage>
    <DevTools /> 
  <Typography.Text type='danger'>{error?.message}</Typography.Text>
  </Fullpage>


export const ButtonNoPadding = styled(Button)`
  padding: 0;
`;

export const FullPageLoading=()=>
  <Fullpage> <Spin size="large">
     
    </Spin></Fullpage>




