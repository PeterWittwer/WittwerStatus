

import React from "react";
import {  NavLink, Link } from 'react-router-dom';

export default class SideNav extends React.Component {

  render() {

    return(
      
 <div>
    <div id="left_col_controls_wrapper" className="z-depth-2">
            <div>
              <Link to='/genepull'>
              <a className="waves-effect waves-red btn-flat">GenePull</a>
              </Link>
            </div>

            <div>
              <Link to="/account">
              <a className="waves-effect waves-red btn-flat">Profile</a>
              </Link>
            </div>
    </div>
 </div>

      );
    }
  }








