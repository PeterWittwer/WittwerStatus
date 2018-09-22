import React from 'react';
import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Comment } from '../common/network_components/comment';

import Feed_blocks from '../feed';


export default class Medical extends React.Component  {


    render () {
	        return (



            <div>

<div id="wrapper">
                <div id="sidebar-wrapper" className="">
                <Feed_blocks/>
                </div>
                        
                <div id="page-content-wrapper">
                        
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                     
                      <Profile_identifier/>

                      <div id="li_block">
                        <div className="med_item">
                        Constant Headeaches
                        </div>
                        <div className="med_item">
                        Foot Fungus
                        </div>
                        <div className="med_item">
                        Pimples
                        </div>
                        <div className="med_item">
                        Cancer
                        </div>
                        <div className="med_item">
                        Cold
                        </div>
                        <div className="med_item">
                        Clogged Ears
                        </div>
                        <div className="med_item">
                        Lumps in armpits
                        </div>
                        <div className="med_item">
                        Emphazima
                        </div>
                      </div>
                        
          <div id="med_content_wrapper">
            
          <h2 id="active_med">Constant Headaches</h2>

          <div className="wrapper_a">   
          <h3 id="sympotoms">Sympotoms</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
          </div> 

          <div className="wrapper_a">   
          <h3 id="treatments">Treatment Approach</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
          </div> 
            
          <div className="wrapper_a">   
          <h3 id="treatments">Medications</h3>
          <ul>
            <li>
            Tylanol
            </li>
            <li>
            Water
            </li>
            <li>
            Yoga
            </li>
          </ul>
          </div> 
            
          <div className="wrapper_a">   
          <h3 id="treatments">Results</h3>
          <p>Soooo.... After taking to tylanol my headach did NOT go away. I was in so much pain.  I do not recomend drinking 3 Mikes Lemondades and expecting tylonal to be the answer. At least for me that is.</p>
          </div>  

          </div>
            <br/>          

            <Comment/>           
                     </div>
                </div>
            </div>
                   
            </div>{/*END page-content-wrapper*/} 
            
        </div>{/*END WRAPPER */} 
    </div>



	    );
    };
}
