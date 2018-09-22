
import React from "react";
// import { connect } from 'react-redux';
import  { Link }  from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Family_tree } from '../familyTree';
import MyContributions from '../contributions/profile';

class ProfileView extends React.Component  {
        
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

                        
                <div id="page-content-wrapper">
                        
            

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




                   
            </div>{/*END page-content-wrapper*/} 
       
    </div>
    );
  }
}

export default ProfileView;