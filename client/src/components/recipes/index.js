import React from "react";
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Contribution_subnav } from '../common/network_components/contributions_subnav';

export default class Recipes extends React.Component {

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
                            <NavLink to="/recipe"><h4>Enchiladas</h4></NavLink>
                          </div>
                          <div className="thumnail_img">
                            <img src="img/enchiladas.jpg"/>
                          </div>
                         <div className="thumbnail_description">
                           <p>This is the recupe that was passed down to me by my great grandmother.  She passed away in 1928... </p>
                         </div>
                       </div> 
                       {/* end thumbnail_container */}
                       
                       <div className="column_flex_container thumbnail_container">
                          <div className="thumbnail_title">
                            <NavLink to="/recipe"><h4>Chicken Tikka Masala</h4></NavLink>
                          </div>
                          <div className="thumnail_img">
                            <img src="img/chicken-tikka-masala.jpg"/>
                          </div> 
                         <div className="thumbnail_description">
                           <p>This is the recupe that was passed down to me by my great grandmother.  She passed away in 1928... </p>
                         </div>
                       </div> 
                       {/*end thumbnail_container*/}
                       
                       <div className="column_flex_container thumbnail_container">
                          <div className="thumbnail_title">
                            <NavLink to="/recipe">
                              <h4>Lamb Chops</h4></NavLink>
                          </div>
                          <div className="thumnail_img">
                            <img src="img/lamb_chops.jpg"/>
                          </div> 
                         <div className="thumbnail_description">
                           <p>This is the recupe that was passed down to me by my great grandmother.  She passed away in 1928...</p>
                         </div>
                       </div> 
                       {/*end thumbnail_container */}
                       
                       <div className="column_flex_container thumbnail_container">
                          <div className="thumbnail_title">
                            <NavLink to="/recipe"><h4>Menudo</h4></NavLink>
                          </div>
                          <div className="thumnail_img">
                            <img src="img/menudo.jpg"/>
                          </div>
                         <div className="thumbnail_description">
                           <p>This is the recupe that was passed down to me by my great grandmother.  She passed away in 1928...</p>
                         </div>
                       </div> 
                       {/* end thumbnail_container */}
                       
                       
                    </div> 
                    {/* end thumbnail_list_wrapper */}
      
                    </div>
                    {/* end col-lg-12*/}
                </div>
                {/* end row */}
            </div>
            {/* end container-fluid */}
        </div>
	);
  }
}