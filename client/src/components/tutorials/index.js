import React from "react";
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Contribution_subnav } from '../common/network_components/contributions_subnav';


export default class Tutorials extends React.Component {
 
	render (){
		return (
            <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                     
                      <Profile_identifier/>
                      <Contribution_subnav/>
                     
             <div id="thumbnail_list_wrapper"> 
                 <div className="column_flex_container thumbnail_container">
                    <div className="thumbnail_title">
                      <NavLink to="/tutorial"><h4>Creating a Startup - Office Design</h4></NavLink>
                    </div>
                    <div className="thumnail_img">
                      <img src="img/office.jpg"/>
                    </div>
                 </div> 
                 {/* end thumbnail_container */}
                 
                 <div className="column_flex_container thumbnail_container">
                    <div className="thumbnail_title">
                       <NavLink to="/tutorial"><h4>Dating in High School</h4></NavLink>
                    </div>
                    <div className="thumnail_img">
                     <img src="img/highSchoolCouple.jpg"/>
                    </div> 
                 </div> 
                 {/* end thumbnail_container */}
                 
                 <div className="column_flex_container thumbnail_container">
                    <div className="thumbnail_title">
                      <NavLink to="/tutorial"><h4>Raising a child 1-5yrs old</h4></NavLink>
                    </div>
                    <div className="thumnail_img">
                      <img src="img/nurture-kid.jpg"/>
                    </div> 
                 </div> 
                 {/* end thumbnail_container */}
                 
                 <div className="column_flex_container thumbnail_container">
                    <div className="thumbnail_title">
                      <NavLink to="/#"><h4>Playing Highschool Football</h4></NavLink>
                    </div>
                    <div className="thumnail_img">
                      <img src="img/footballDrills.jpg"/>
                    </div>
                 </div> 
                 {/* end thumbnail_container */}
                                  
              </div> 
              {/* end thumbnail_list_wrapper */}         
                     
                    </div>
                </div>
            </div>
        </div>
	);
  }
}