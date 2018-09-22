import React from 'react';
import { Profile_identifier } from '../network_components/profile_identifier';
import { Comment } from '../network_components/comment';



export default class Career extends React.Component  {


    render () {
	        return (

		    <div>		

					<div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                     
                      <Profile_identifier/>

                      <h2>Career</h2>  
          
                      
          <div className="wrapper_a">
            <div className="header_1">
            <h4>Wells Fargo </h4>
            </div>
            <div className="header_2">
            <h5>UX/UI Design</h5>
            </div>
            <div className="paragraph_1">
            <p> This is the paragraph to explain the job and what the person did in the job. This is the paragraph to explain the job and what the person did in the job. </p>
            </div>
          </div>
                    
          <div className="wrapper_a">
            <div className="header_1">
            <h4>Apple</h4>
            </div>
            <div className="header_2">
            <h5>Interface analyst</h5>
            </div>
            <div className="paragraph_1">
            <p> This is the paragraph to explain the job and what the person did in the job. This is the paragraph to explain the job and what the person did in the job. </p>
            </div>
          </div>
                    
          <div className="wrapper_a">
            <div className="header_1">
            <h4>Microsoft</h4>
            </div>
            <div className="header_2">
            <h5>Front-End Developer</h5>
            </div>
            <div className="paragraph_1">
            <p> This is the paragraph to explain the job and what the person did in the job. This is the paragraph to explain the job and what the person did in the job. </p>
            </div>
          </div>
                    
          <div className="wrapper_a">
            <div className="header_1">
            <h4>US Army</h4>
            </div>
            <div className="header_2">
            <h5>Secret Spy</h5>
            </div>
            <div className="paragraph_1">
            <p> This is the paragraph to explain the job and what the person did in the job. This is the paragraph to explain the job and what the person did in the job. </p>
            </div>
          </div>          
                    
                     </div>
                </div>
            </div>
        </div>
				
		    </div>
	    );
    };
}
