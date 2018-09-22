import React from 'react';
import  {BrowserRouter as Router, Route, NavLink, Switch}  from 'react-router-dom';
import { SideNavigation } from '../../components/MainNav';

//import { connect } from 'react-redux';
//import { itemsFetchData } from '../actions';
 import ShipmentHeader from "./ShipmentHeader";
 import Details from "./Details";
//  import Notes from "./notes";
//  import Isf from "./isf";
//  import Scans from "./scans";
//  import Agents from "./agents";
//  import Documents from "./documents";
//  import Rate from "./rate";
//  import Billing from "./billing";
//  import Log from "./log";
//  import Cargo from './cargo/cargo';
  import Tracking from "./Tracking";
 
 const Shipment = ({ match }) => {


    return (
        <div id="wrapper">
                
        <div id="sidebar-wrapper" className="">
        <SideNavigation/>
        </div>
                
        <div id="page-content-wrapper">
                
        <div className="col-sm-12 toggle-row">
        <button href="#menu-toggle" className="glyphicon glyphicon glyphicon-menu-hamburger" id="menu-toggle">
        <i className="fas fa-bars"></i>


        </button>
        </div>
   
         <ShipmentHeader />  

		 {/* <div className="nav shipment_nav">  
         <nav><center> <ul className="li-move">
                <NavLink activeClassName='is-active'  to={`${match.url}`}>  <li> <span><i className="fas fa-road"></i> DETAILS</span>   </li> </NavLink>
                <NavLink activeClassName='is-active' to={`${match.url}/tracking`}>   <li className=""> <span> <i className="fas fa-globe-americas"></i> TRACKING</span> </li> </NavLink>
                <NavLink activeClassName='is-active' to={`${match.url}/cargo`}>  <li className=""> <span><i className="fas fa-briefcase"></i> CARGO</span>   </li> </NavLink>
                <NavLink activeClassName='is-active' to={`${match.url}/cargo`}>  <li className=""> <span><i className="fas fa-lock"></i> CUSTOMS</span>   </li> </NavLink>
                <NavLink activeClassName='is-active' to={`${match.url}/documents`}>  <li className="">  <span><i className="fas fa-folder-open"></i> DOCUMENTS</span>  </li>  </NavLink>
                <NavLink activeClassName='is-active' to={`${match.url}/documents`}>  <li className="">  <span><i className="fas fa-comments"></i> MESSAGES</span>  </li>  </NavLink>
        </ul> </center> </nav>  
        </div>   */}


        <div className="tab-content">
            
            <Switch>
            <Route exact path="/shipment/:id/details" component={Details}/>
            </Switch>

            <Switch>
            <Route exact path="/shipments/:id/tracking" component={Tracking}/>
            </Switch>

        </div>  
	</div>


            </div>
      



    )
 }


export default Shipment;



