import React, { PureComponent  } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import 
{
    HeaderWrapper, Logo, Nav, NavItem, SearchWrapper,
    SearchInfoTitle, SearchInfo, SearchInfoSwitch, SearchInfoItem, NavSearch, Addition, Button
} from './style'
import { actionCreators } from './store'
import { actionCreators as actionCreators1} from'../../page/login/store'
class Header extends PureComponent  {

    getListArea() {
        let { focused, list, page, handleMouseEnte, mounseIn, handleMouseLeave, headLeChangepage, totolpage } = this.props;
        let newList = list.toJS();
        let pageList = [];
        if(newList.length ){
         for (let i = (page - 1) * 10; i < page * 10; i++) {
            pageList.push(
                <SearchInfoItem key={newList[i]} >{newList[i]}</SearchInfoItem>
            )
        }
        }
       
        if (focused || mounseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnte}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle >
                        热门搜索
                        <SearchInfoSwitch onClick={() => { headLeChangepage(page, totolpage,this.spinIcon) }}>
                         <span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</span>  换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {


        let { focused, handleInputFocus, handleInputBlur,list,login,logintuichu } = this.props;
        return <div>  <HeaderWrapper>
              <Link to="/">
            <Logo />
            </Link>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载app</NavItem>
               {login? <NavItem  className="right" onClick={logintuichu} >退出</NavItem>:<Link to="/login"><NavItem className="right">登录</NavItem></Link>}
               
                <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                <SearchWrapper>

                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide">
                        <NavSearch
                            className={focused ? "focused" : ""}
                            onFocus={()=>{handleInputFocus(list)}}
                            onBlur={handleInputBlur} />
                    </CSSTransition>
                    <span className={focused ? "focused iconfont zone" : "iconfont zone"}>&#xe617;</span>
                    {this.getListArea()}


                </SearchWrapper>
            </Nav>
            <Addition>
              <Link to='/write'>  <Button    className='reg'><span className="iconfont">&#xe600;</span> 写文章</Button></Link>
                <Button className='writting'>注册</Button>
            </Addition>
        </HeaderWrapper></div>;
    }
}



const mapStateToProps = (state, ownPreps) => {
    // focused: state.get('header').get('focused')
    console.log("state.getIn(['login','login'])",state.getIn(['login','login']))
    return {
        focused: state.getIn(["header", 'focused']),
        mounseIn: state.getIn(["header", 'mounseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totolpage: state.getIn(['header', 'totolpage']),
        login:state.getIn(['login','login'])
        // focused:state.get('header').get('focused')
    }
}

const mapDispathToprops = (dispatch) => {
    return {
    
        handleInputFocus(list) {
         if(list.size===0){
              dispatch(actionCreators.getList()) 
         }
           
          
        
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnte() {
            dispatch(actionCreators.mouseEnter())

        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())

        },
        logintuichu(){
            dispatch(actionCreators1.login1())
        }
        ,
        headLeChangepage(page, totalpage,spin) {
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10)
            }else{
                originAngle=0;
            }
            spin.style.transform=`rotate(${originAngle+360}deg)`
            if (page < totalpage) {
                dispatch(actionCreators.changePageList(page + 1))
            } else {
                dispatch(actionCreators.changePageList(1))
            }
        }

    }
}

export default connect(mapStateToProps, mapDispathToprops)(Header);
