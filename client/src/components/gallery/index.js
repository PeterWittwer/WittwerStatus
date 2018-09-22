import React from "react";
import ReactDOM from 'react-dom';
import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Contribution_subnav } from '../common/network_components/contributions_subnav';
import  Shared_post  from '../common/network_components/shared_post';
import { Comment } from '../common/network_components/comment';

export default class Gallery extends React.Component {

	render (){
		return (
            <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
        
                      <Profile_identifier/>
                      <Contribution_subnav/>
                      <Shared_post postImg='img/THE_Royal.jpg' comment="This is the coment" /> 
 
                      <Comment/> 
        
                    </div>
                </div>
            </div>
        </div>
	);
  }
}


