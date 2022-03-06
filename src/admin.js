import React, { Component } from 'react';
import { Row, Col } from 'antd'
import Footer from './components/Footer';
import Header from './components/Header';
import './styled/common.less'
import NavLeft from './components/NavLeft';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
class Admin extends Component {
 
    render() {
          let tiaozhuan = window.location.hash.replace(/#|\?.*$/g,'');
             return(<div>

       { tiaozhuan==="/"?<Redirect to="/home"/>:<Row  className='container'>
                 
            <Col span="4" className='nav-left'>
                <NavLeft />
            </Col>
            <Col span="20" className='main'>
                <Header />
                <div className='content'> 
                {this.props.children}
                </div>
                <Footer />
                 
                     </Col>
        </Row>}
        

             </div>) 
        
        
    }
}
export default withRouter( Admin )

