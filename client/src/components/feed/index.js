
import React from "react";
import {  NavLink } from 'react-router-dom';
import  { Link }  from 'react-router-dom';

import ProfilePlaceholder from '../../img/profile_placeholder_m.jpg';
import SamplePostImage from '../../img/THE_Royal.jpg'
import Post from "./post";
import SideNav from '../common/sideNav';

export default class Feed_blocks extends React.Component {

  render() {

    return(
      
 <div>

      
  <SideNav/>

 



      <Post/>
      <Post/>

 
   


 </div>

      );
    }
  }


