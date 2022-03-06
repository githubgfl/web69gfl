import React from 'react'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import App from './App'
import {GlobalStyle} from './styled'
import {FontStyle} from './statics/iconfont/iconfont'
import store from './store'

ReactDOM.render(
   <div> 
       <Provider store={store}>
      <GlobalStyle/>
      <FontStyle/>
       <App/> 
        </Provider>
   </div>
  
 ,
     document.getElementById("app")
 )