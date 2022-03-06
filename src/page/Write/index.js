import React, { PureComponent } from 'react';
import {Navigate} from 'react-router-dom'
import { connect } from 'react-redux';

class Write extends PureComponent  {

  
    render() {
        let {login123}=this.props
        if(login123){
             return <div>
                 写文章
                     </div>;
        }else{
        return <Navigate to='/login'/>
        }
       
    }
 
}


   const mapStateToProps = (state, ownPreps) => {


    return {
        login123:state.getIn(['login','login'])
    }
}


export default connect(mapStateToProps,null)(Write)

