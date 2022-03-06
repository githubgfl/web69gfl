import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    topicList:[]

}
);



     export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.change_datail_data:
            return state.merge({
                topicList: fromJS(action.result.topicList)
            })
            default:
            return state
    }
}