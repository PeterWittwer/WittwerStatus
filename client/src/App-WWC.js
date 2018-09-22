import React, { Component } from 'react';
import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

//import AppNavbar from './components/AppNavbar';
import Template from './pages/testing';
import Shipments from './pages/shipments';
import Individual_Shipment from './pages/individualShipment';
import Details from './pages/details';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import { TopNavigation, SideNavigation } from './components/MainNav';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './custom.css';
   
    class App extends Component {
    render() {
        return (


            <Provider store={store}>
            <Router>
            <div className="App">
                <Navbar/>
                {/* <TopNavigation/> */}
            
                <div id="wrapper">
                
                <div id="sidebar-wrapper" className="">
                <SideNavigation/>
                </div>
                        
                <div id="page-content-wrapper">
                        
                <div className="col-sm-12 toggle-row">
                <button href="#menu-toggle" className="glyphicon glyphicon glyphicon-menu-hamburger" id="menu-toggle"></button>
                </div>
                
                <div className="brand-box">
                </div>
            
                <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/shipments" component={Shipments} />

                        <Route exact path="/:id" component={Details} />

                        <Route exact path="/status-monitor" component={Template} />
                        <Route path="/individual-shipment/:id" component={Individual_Shipment}  /> 
                </Switch>
        
                <Container>
             
                </Container>  
        
            </div>{/*END page-content-wrapper*/} 
        </div>{/*END WRAPPER */} 
     </div>
            </Router>
            </Provider>
            );
        }
    }

export default App;
