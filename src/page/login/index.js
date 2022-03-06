import React, { PureComponent } from 'react';
import {Navigate} from 'react-router-dom'
import { connect } from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from './style'
import {actionCreators} from './store'

class Login extends PureComponent  {

  
    render() {
        let {login123}=this.props
        if(!login123){
             return <div>

            <LoginWrapper> 
                <LoginBox>
                    <Input placeholder='账号'   innerRef={(input)=>{this.accound=input}}  />
                    <Input placeholder='密码' type='password' innerRef={(input)=>{this.passWord=input}}  />
                    <Button onClick={()=>{
                          console.log("this",this)
                          this.props.login(this.accound,this.passWord)
                    }} >登录</Button>
                </LoginBox>
               
            </LoginWrapper>
           
           
        </div>;
        }else{
        return <Navigate to='/' />
        }
       
    }
 
}


   const mapStateToProps = (state, ownPreps) => {


    return {
        login123:state.getIn(['login','login'])
    }
}




    const mapDispathToprops = (dispatch) => {
        return {
          login(accountElem,passwordElem){
              dispatch(actionCreators.login(accountElem,passwordElem))

          }
        }
    }





export default connect(mapStateToProps,mapDispathToprops)(Login)

