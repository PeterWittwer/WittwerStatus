import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
 
 class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (


    <div className="dark_gray z-depth-2" style={{margin: '10px'}}>
          <div className="card-content white-text">


        <div className="Profiles_Wrapper">
          <div className="profile_title_box">
            <div>
             <img style={{width: '65px'}} src={profile.user.avatar} alt="" className="circle responsive-img" /> 
             </div>
             
             <div>
             <h5 style={{margin : '0px'}}>{profile.user.name}</h5>
              <p style={{margin : '0px'}}>
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              
              <p style={{margin : '2px'}}> {isEmpty(profile.location) ? null : ( <span>{profile.location}</span> )} </p>
              <Link to={`/profile/${profile.handle}`}> View Profile </Link>
              

             </div>

            

          </div>


          



          <div style={{borderLeft: 'solid thin pink', paddingLeft: '5px', margin: '10px'}}>
            <p style={{textTransform: 'uppercase', color: '#ff80ab'}}>Tasks</p>
            <ul >
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="" style={{display: 'inline-block', margin:'5px' }}>
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
