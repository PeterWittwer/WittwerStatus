import React from "react";
import ReactDOM from 'react-dom';
import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Contribution_subnav } from '../common/network_components/contributions_subnav';
import { Comment } from '../common/network_components/comment';

export default class Individual_tutorial extends React.Component {

	render (){
		return (
            <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                       
                      <Profile_identifier />

                      <Contribution_subnav /> 
                      
          <div id="video_container_wrapper" className="column_flex_container"> 
              
              <div id="video_main" className="column_flex_container"> 
                <div>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/cGEb-q5JMU0" frameborder="0" allowfullscreen></iframe>
                </div>
                
                <div>
                  <h3>Inside Facebook HQ - Mark Zuckerberg - Inside Facebook - BBC</h3>
                  <p>This is a description of the video and I hope you learn and are able to grow with the instructions I have provided in this video. Contact me at infdonatelli@yaho.com or go to my site www.adamediadesign.com</p>
                </div>
              </div>
              {/*END video_container_wrapper */}
            
                <div id="video_list" className="flex_container"> 
                      <div><iframe src="https://www.youtube.com/embed/ZZ9ROUf48Vs" frameborder="0" allowfullscreen></iframe>
                      <h5>Pinterests Headquarters Cribs episode</h5>
                      </div>
                    <div><iframe src="https://www.youtube.com/embed/jrrCSnOFyaY" frameborder="0" allowfullscreen></iframe>
                      <h5>Dropbox Hack week</h5>
                    </div>
                      <div><iframe src="https://www.youtube.com/embed/g0NHFOgYe2g" frameborder="0" allowfullscreen></iframe>
                      <h5>Shutterstocks office in San francisco</h5>
                      </div>
                      <div>
                        <iframe src="https://www.youtube.com/embed/6PNgRzHzKUA" frameborder="0" allowfullscreen></iframe>
                      <h5>Awsome office I want to work at</h5>
                      </div>
                      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/zPmeFAi236A" frameborder="0" allowfullscreen></iframe>
                      <h5>This is the Zoosk office environment</h5>
                      </div>
                      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/ekBH1lo9la4" frameborder="0" allowfullscreen></iframe>
                      <h5>Creative live cribs episode</h5>
                      </div>
                </div>
            
          </div>
          {/* END video_container_wrapper */}
        
            <Comment/>
                    </div>
                </div>
            </div>
        </div>
	);
  }
}


