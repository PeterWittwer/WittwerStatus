
import React from "react";
import {  NavLink } from 'react-router-dom';
import ProfilePlaceholder from '../../img/profile_placeholder_m.jpg';
import SamplePostImage from '../../img/THE_Royal.jpg'


export default class Post extends React.Component {

  render() {

    return(
      
 <div>

 <div className="feed_item dropshadow">
  <div className="feed_item_tabs_wrapper">
    <div className="feed_item_tab">
      <NavLink to="/"> 
        <img  src={ProfilePlaceholder}  alt="fireSpot"/>

      </NavLink>
    </div>
    <div className="feed_item_tab">
      <NavLink to="/contributions">
        <span><i class="fas fa-archive glyphicon"></i></span>
      </NavLink>
    </div>
    <div className="feed_item_tab">
      <NavLink to="/IDFamilytree"> 
      <span><i class="fas fa-code-branch glyphicon"></i></span>
      </NavLink>
    </div>
    <div className="feed_item_tab">
      <NavLink to="/medical"><span><i class="fas fa-heartbeat glyphicon"></i></span></NavLink>
    </div>
  </div>
    
  <div className="feed_item_content">
    <img src={SamplePostImage} style={{width:'120'}} />
  </div>
    
  <div className="feed_item_tabs_wrapper">
    <div className="feed_item_tab">
      <NavLink to="/login"><span><i class="fas fa-adjust glyphicon"></i>

</span></NavLink>
    </div>
    <div className="feed_item_tab">
    <NavLink to="/external_about"><span><i class="fas fa-user glyphicon"></i></span></NavLink>
    </div>
    <div className="feed_item_tab">
      <span><i class="fas fa-piggy-bank glyphicon"></i></span>
    </div>
  </div> 
    
 </div> 


 

 </div>

      );
    }
  }


