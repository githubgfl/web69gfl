import React, { PureComponent  } from 'react';
import { connect } from 'react-redux'
import { RecommendItem } from '../style'
class Recommend extends PureComponent  {
    render() {

        const { List } = this.props;

        return <div>

            <RecommendItem>


                {
                    List.map((item) => {
                        return (
                            <img key={item.get("id")} className='topreco' src={item.get("imgUrl")}></img>
                        )
                    })
                }

            </RecommendItem>
        </div>;
    }
}
const mapStateToProps = (state, ownPreps) => {

    return {
        List: state.get('home').get('recommend')

    }
}



export default connect(mapStateToProps, null)(Recommend)
