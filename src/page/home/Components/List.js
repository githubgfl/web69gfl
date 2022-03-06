import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { ListItem, ListInfo,LoadMore } from '../style'
import {actionCreators} from '../store'
 class List extends PureComponent  {
    render() {

        const {List,getMoreList,page}=this.props;
        return (

            <div>

                {
                       List.map((item,index)=>{
                           return (
                               <Link key={index} to={'/detail/'+index}>
                        <ListItem>
                        <img className='pic' alt='' src={item.get('imgUrl')} />
                        <ListInfo>
                            <h3 className='title'>{item.get("title")}</h3>
                            <p className='desc'>
                               {item.get("desc")}
                            </p>
                        </ListInfo>
                    </ListItem> </Link>)     
                       })
                }

             
             <LoadMore onClick={()=>{getMoreList(page)}}>获得更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state, ownPreps) => {


    return {
         List: state.get('home').get('articleList'),
         page:state.get('home').get('articlePage')
    }
}
const mapDispatch=(dispatch)=>{
    return{
           getMoreList(page){
             dispatch(actionCreators.getMoreList(page))
           }

    }
}

export default connect(mapStateToProps, mapDispatch)(List)


