import  {reducer as headerReducer }  from "../common/header/store";
import  {reducer as homeReduxer} from '../page/home/store'
import  {reducer as datailReduxer} from '../page/detail/store'
import { reducer as loginReaduxer } from "../page/login/store";
import {combineReducers} from 'redux-immutable'
const reduxer=combineReducers({
    
    header:headerReducer ,
    home:homeReduxer,
    datail:datailReduxer,
    login:loginReaduxer
})

export default reduxer