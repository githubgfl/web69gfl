
import React, { Component } from 'react'
import Header from './common/header'
import Home from './page/home'
import Detail from './page/detail/loadable.js'
import Login from './page/login'
import Write from './page/Write'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <div> 
              
               
               <Router>
                   <Header/>
                   <Routes>   
            
                  <Route path="/" exact element={<Home />} />
                  <Route path="/detail/:id" exact element={<Detail />} />
                  <Route path="/login" exact element={<Login/>} />
                  <Route path="/write" exact element={<Write/>} />
                  
                </Routes>
            
        
               </Router>
            </div>
        )
    }
}
