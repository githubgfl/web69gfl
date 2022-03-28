import { UserAuth } from "context/auth-context";
import React from "react";
import {Form,Input} from 'antd'
import {LongButton} from './index'
import {useAsync} from '../utils/use-async'
// import {useDispatch} from 'react-redux'
// import { login } from "store/auth.slice";
export const LoginScreen = ({onError}:{onError:(error:any)=>void}) => {

  const {login}=UserAuth()
  const {run,isLoading}=useAsync(undefined,{throwOnError:true})

  // const dispatch =useDispatch()
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value;
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;
    

  //     login({ username, password });
    



  // 

  const handleSubmit = async (values:{username:string,password:string}) => {
  //  dispatch(login(values))
    try{
    await run(login(values));
  } 
  catch(e){
     onError(e)
  }
   

  };
  return (
    <Form onFinish={handleSubmit}>
  <Form.Item name={'username'} rules={[{required:true,message:'请输入用户名'}]}>
         <Input placeholder={"用户名"} type='text' id="usrname"></Input>
  </Form.Item>


     
  <Form.Item name={'password'}  rules={[{required:true,message:'请输入密码'}]} >
         <Input placeholder={"密码"} type='password' id="password"></Input>
  </Form.Item>


  <Form.Item name={'submit'}    >
        <LongButton loading={isLoading} htmlType={"submit"} type={"primary"}>登录</LongButton>
  </Form.Item>
   

    </Form>
  );
};
