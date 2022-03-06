import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { DetailWrapper, Header, Content } from './style'
import {withRouter} from './withRouter'

       
class Detail extends PureComponent {
 

  render() {
    console.log(this.props.params.id)
    const {List}=this.props;
    console.log(List)
    return <div>
    
      {List.map((item, index) => {
        return(
        <DetailWrapper key={index}>
          <Header>{item.get('title')}</Header>


          <Content >
            <img src={item.get('imgUrl')}></img>
           <div dangerouslySetInnerHTML={{__html:item.get('content')}}></div>
          </Content>





        </DetailWrapper>)
      })}

    </div>;
  }
  componentDidMount() {

    this.props.changeDetailData(this.props.params.id)
  }

}

const mapStateToProps = (state, ownPreps) => {
  return {
    List: state.get('datail').get('topicList')
  }
}


const mapDispathToprops = (dispatch) => {
  return {

    changeDetailData(id) {
      dispatch(actionCreators.detaildata(id))
    },


  }
}
export default connect(mapStateToProps, mapDispathToprops)(withRouter(Detail))