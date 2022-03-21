import { UserAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import {Form,Input} from 'antd'
import {LongButton} from './index'
import {useAsync} from '../utils/use-async'
// import * as auth from '../../auth-provider'
export const RegisterScreen = ({onError}:{onError:(error:any)=>void}) => {
  // const login = (param: { username: string; password: string }) => {
   
  // };
  const {register}=UserAuth()
  const {run,isLoading}=useAsync(undefined,{throwOnError:true})
  const handleSubmit = async ({cpassword,...values}:{username:string,password:string,cpassword:string}) => {
if(cpassword!==values.password){
  
     onError(new Error("请确认两次输入密码"))

     return
   }
    try{
    await run(register(values)) ;
 } catch(e){
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
   
  <Form.Item name={'cpassword'}  rules={[{required:true,message:'请确认密码'}]} >
         <Input placeholder={"确认密码"} type='password' id="cpassword"></Input>
  </Form.Item>

  <Form.Item name={'submit'}    >
        <LongButton loading={isLoading}  htmlType={"submit"} type={"primary"}>注册</LongButton>
  </Form.Item>
   

    </Form>
  );
};
