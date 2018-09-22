
import React from "react";
// import { connect } from 'react-redux';
// import  { Link }  from 'react-router-dom';
// import { getShipments } from '../../actions/ShipmentActions';
// import PropTypes from 'prop-types';
import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

import { SideNavigation } from './MainNav';
import Feed_blocks from '../feed';
import { Family_tree } from "../familyTree";


class Layout extends React.Component  {
        

	render () { 

  
        return ( 
      
            <div>

<div id="wrapper">
                <div id="sidebar-wrapper" className="">
                <Feed_blocks/>
                
                </div>
                        
                <div id="page-content-wrapper">
                        
                <Family_tree/>
                   
            </div>{/*END page-content-wrapper*/} 
            
        </div>{/*END WRAPPER */} 
    </div>
    );
  }
}

export default Layout;