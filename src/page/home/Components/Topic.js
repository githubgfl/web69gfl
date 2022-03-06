import React, { PureComponent  } from 'react';
import {TopicWrapper,TopicItem} from '../style'
import { connect } from 'react-redux'

class Topic extends PureComponent  {
    
  render() {
    return <div>

   <TopicWrapper>
      {
          this.props.List.map((item)=>{
              return (
                <TopicItem key={item.get("id")}>
                <img className='topic-pic'  alt='' src={item.get('imgUrl')}
                />
                {item.get('title')}
              </TopicItem>
              )
          })
      }
      
       
   </TopicWrapper>

    </div>;
  }

  
}


const mapStateToProps = (state, ownPreps) => {
      

    return {
        List:state.get('home').get('topicList')
    }
}


export default connect(mapStateToProps,null)(Topic)
