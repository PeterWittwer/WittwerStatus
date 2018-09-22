import React, { Component } from 'react'
import logo from '../../img/Peter-Wittwer-Logo-white.png';
import  { Link }  from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

 class Landing extends Component {

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }


    render() {
        return(
            <div>

 <div className="landing">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">
            </h1>
            <div className="display-3 mb-4 Mylogo">
            <img  src={logo} />
            </div>
            <p className="lead">
            {' '}
             Create a developer profile/portfolio, share posts and get help from other developers</p>
            <hr />
            <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
            <Link to="/login" className="btn btn-lg btn-light">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

            </div>
        )
    }
}


Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
