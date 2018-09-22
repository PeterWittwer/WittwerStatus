import React, { Component } from 'react'
import  { Link }  from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';


class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    //window.location.href = '/login';

  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="right hide-on-med-and-down">
      
        <li>
        <Link className="nav-item" to="/genepull">
            GenePull
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shipments">
            Shipments
          </Link>
        </li>

       <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a  href="" onClick={this.onLogoutClick.bind(this)}   className="nav-link" >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <div className="nav-wrapper"> 
      <ul className="">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
         
        </li>
        <li>
          <Link className="nav-link" to="/genepull" style={{color: 'red'}}>
            GenePull
          </Link>
          </li>

      </ul>
      </div>
    );


        return(
          <div className="navbar-fixed">
          <nav className="dark_oppacity_b">
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo">GenePull</a>
                {isAuthenticated ? authLinks : guestLinks}

              </div>
            </nav>
          </div>


        )
    }
}



Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);
