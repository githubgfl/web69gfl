import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState=fromJS({
    focused: false,
    mounseIn:false,
    list:[],
    page:1,
    totalpage:1

});
export default (state =defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused',true)
        case constants.SEARCH_BLUR:
            return state.set('focused',false)
            case constants.CHANGE_LIST:
                return state.merge({
                    list:action.data,
                    totolpage:action.totalpage})
                // return state.set('list',action.data).set('totolpage',action.totalpage)
           case constants.MOUSE_ENTER:
            return state.set('mounseIn',true)
            case constants.MOUSE_LEAVE:
            return state.set('mounseIn',false)
            case constants.CHANGE_PAGELIST:
                return   state.set('page',action.page)
                default:
                return state
    }
}