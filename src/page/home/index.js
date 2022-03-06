import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import List from './Components/List';
import Recommend from './Components/Recommend'
import Topic from './Components/Topic';
import Writer from './Components/Writer';
import {actionCreators} from './store'

class Home extends PureComponent  {
 

    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render() {

        return <div>
            <HomeWrapper> 
          <HomeLeft> <img className='banner-img' src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbj-yuantu.fotomore.com%2Fcreative%2Fvcg%2Fnew%2FVCG211363439424.jpg%3FExpires%3D1643621485%26OSSAccessKeyId%3DLTAI2pb9T0vkLPEC%26Signature%3DV7ZL3VtfrWsfGDmJDiahAW3pOgo%253D%26x-oss-process%3Dimage%252Fauto-orient%252C0%252Fsaveexif%252C1%252Fresize%252Cm_lfit%252Ch_1200%252Cw_1200%252Climit_1%252Fsharpen%252C100%252Fquality%252CQ_80%252Fwatermark%252Cg_se%252Cx_0%252Cy_0%252Cimage_d2F0ZXIvdmNnLXdhdGVyLTIwMDAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLG1fbGZpdCxoXzE3MSx3XzE3MSxsaW1pdF8x%252F&refer=http%3A%2F%2Fbj-yuantu.fotomore.com&app=2002&size=f10000,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645672060&t=d892cbea82e158e84da60f5557be4c5c"/>
                        <Topic/>
                        <List/>
                       
          
          </HomeLeft>
          <HomeRight>
               <Recommend/>
               <Writer/>

          </HomeRight>

       {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
            </HomeWrapper>
           
           
        </div>;
    }


   
    componentDidMount(){
 
       this.props.changeHomeData()
       this.bindEvents()
    }


    

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}


   const mapStateToProps = (state, ownPreps) => {


    return {
        showScroll: state.get('home').get('showScroll'),
        
    }
}




    const mapDispathToprops = (dispatch) => {
        return {
        
            changeHomeData() {
                dispatch(actionCreators.homedata())
            },
           changeScrollTopShow(){
                 if(document.documentElement.scrollTop>800){
                     dispatch(actionCreators.toggleTopShow(true))
                 }else{
                    dispatch(actionCreators.toggleTopShow(false))
                 }
            }
           
           
           
    
        }
    }





export default connect(mapStateToProps,mapDispathToprops)(Home)
