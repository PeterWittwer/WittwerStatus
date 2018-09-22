
import React from "react";
// import { connect } from 'react-redux';
// import  { Link }  from 'react-router-dom';
// import { getShipments } from '../../actions/ShipmentActions';
 import PropTypes from 'prop-types';
import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { Family_tree } from '../familyTree';
import Shared_post from '../common/network_components/shared_post';

// import { Family_tree } from "../familyTree";


   export default class TabbedHeader extends React.Component  {

    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    
 

	render () {
        
        function TabContainer(props) {
            return (
              <Typography component="div" style={{ padding: 8 * 3 }}>
                {props.children}
              </Typography>
            );
          }

          TabContainer.propTypes = {
            children: PropTypes.node.isRequired,
          };

        const { value } = this.state;


        return ( 
      
            <div>

            <main>
            <div>
            <Tabs className="MyTabs" value={value} onChange={this.handleChange}>
              <Tab label="Tree" />
              <Tab label="Contributions" />
              <Tab label="Medical" />
              <Tab label="About" />
              <Tab label="Donations" />
            </Tabs>



        {value === 0 && 
        <TabContainer> 
          <Family_tree/>  
          <Family_tree/> 
        </TabContainer>}
        
        {value === 1 && 
        <TabContainer> 
              <MyContributions/>
        </TabContainer>} 
        
        {value === 2 && <TabContainer>Medical</TabContainer>}
        
        {value === 3 && <TabContainer>About</TabContainer>}
        
        {value === 4 && <TabContainer>Donations</TabContainer>}





      </div>


            </main>
                        
            </div>
    );
  }
}

