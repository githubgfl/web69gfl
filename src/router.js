import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './admin';
import Button from './pages/ui/button';
import Home from './pages/home';
import Nomatch from './pages/ui/nomatch';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Message from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import FormReg from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import Rich from './pages/rich';
import City from './pages/city';
import Order from './pages/order';
import orderDetail from './pages/order/detail';
import Common from './common';
import User from './pages/user'
import BikeMap from './pages/bikeMap';
import Bar from './pages/echarts/bar';
import Pie from './pages/echarts/pie';
import Line from './pages/echarts/line';
import Permission from './pages/permission';


export default class IRouter extends Component {
  render() {
    return (




      <div>



        <Router>


          <Switch>
            {/* <Route path='/login' component={Login} />*/}


            <Route path='/common' render={() =>
              <Common>
                <Route path='/common/order/detail/:orderId' component={orderDetail} />
              </Common>
            } />


            <Route path="/" render={() =>
              <Admin>

                <Route path="/home" component={Home} />
                <Route path="/ui/buttons" component={Button} />
                <Route path='/ui/modals' component={Modals} />
                <Route path='/ui/nomatch' component={Nomatch} />
                <Route path='/ui/loadings' component={Loading} />
                <Route path='/ui/notification' component={Notice} />
                <Route path='/ui/messages' component={Message} />
                <Route path='/ui/tabs' component={Tabs} />
                <Route path='/ui/gallery' component={Gallery} />
                <Route path='/ui/carousel' component={Carousel} />
                <Route path='/form/login' component={FormLogin} />
                <Route path='/form/reg' component={FormReg} />
                <Route path='/table/basic' component={BasicTable} />
                <Route path='/table/high' component={HighTable} />
                <Route path='/rich' component={Rich} />
                <Route path='/city' component={City} />
                <Route path='/order' component={Order} />
                <Route path='/user' component={User} />
                <Route path='/bikeMap' component={BikeMap} />
                <Route path='/charts/bar' component={Bar} />
                <Route path='/charts/pie' component={Pie} />
                <Route path='/charts/line' component={Line} />
                <Route path='/permission' component={Permission} />
                {/* <Redirect to="/home"/> */}


              </Admin>
              

            } />
           
          </Switch>




        </Router>

      </div>

    )
  }
}
