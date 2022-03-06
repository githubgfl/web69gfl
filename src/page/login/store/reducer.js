import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    login:false

}
);



     export default (state = defaultState, action) => {
         console.log('action.value',action.value)
    switch (action.type) {
         case constants.change_LOGIN:
             return state.merge({
                login: fromJS(action.result)
            })

            case constants.change_LOGIN1:
             return state.merge({
                login: fromJS(action.value)
            })
            default:
            return state
    }
}