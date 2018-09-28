import React from 'react'
import { Link } from 'react-router-dom';


const ProfileActions = () => {
  return (
    <div className="content-end" role="group">
    <Link to="/edit-profile" className="btn Button btn-small">
    <i class="material-icons">perm_identity</i> Edit Profile</Link>
    <Link to="/add-experience" className="btn Button btn-small">
    <i class="material-icons">add_circle_outline</i> Experience</Link>
    <Link to="/add-education" className="btn Button btn-small">
    <i class="material-icons">add_circle_outline</i> Education</Link> 
  </div>
  )
}


export default ProfileActions;