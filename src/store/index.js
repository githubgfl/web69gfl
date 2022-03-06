import reducer from './reducer'
import { createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';
export  default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));