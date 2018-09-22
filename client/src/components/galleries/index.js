import React from 'react';
import { NavLink } from 'react-router-dom';
import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Contribution_subnav } from '../common/network_components/contributions_subnav';
import Feed_blocks from '../feed';


export default class Galleries extends React.Component  {

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
                <Contribution_subnav/>
                    
        
                <div className="gallery_wrapper">
        
                    <div>
                        <center className="gallery_title">2015</center>
                        <NavLink to="/gallery"> <img src="./img/park.jpg"/>
                        </NavLink>
                    </div>
        
                    <div>
                        <NavLink to="/gallery">
                        <center className="gallery_title">2016</center>
                        <img src="./img/car.jpg"/>
                        </NavLink>    
                    </div>
        
                    <div>
                        <NavLink to="/gallery">
                        <center className="gallery_title">2017</center>
                        <img src="./img/christmas.jpg"/>
                        </NavLink>    
                    </div>
        
                    <div>
                        <NavLink to="/gallery">
                        <center className="gallery_title">2018</center>
                        <img src="./img/wedding.jpg"/>
                        </NavLink>    
                    </div>
        
                    <div>
                        <center className="gallery_title">2019</center>
                        <img src="./img/future_events.jpg"/>
                    </div>
        
                        <div>
                        <center className="gallery_title">2020</center>
                        <img src="./img/future_events.jpg"/>
                    </div>
        
                    <div>
                        <center className="gallery_title">2021</center>
                        <img src="./img/future_events.jpg"/>
                    </div>
        
                    <div>
                        <center className="gallery_title">2022</center>
                        <img src="./img/future_events.jpg"/>
                    </div>
        
                </div>
        
                </div>
            </div>
        </div>  
               
        </div>{/*END page-content-wrapper*/} 
        
    </div>{/*END WRAPPER */} 
</div>





	    );
    };
}