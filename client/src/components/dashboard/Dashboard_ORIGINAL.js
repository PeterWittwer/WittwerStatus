import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

import BarChart from './barchart';
import PieChart from './piechart';
import LineChart from './linechart';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
      this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
            <div>


          <div className="Dashboard_Wrapper"> 
              <div id="left_dashboard_column">
                  <div> 
                  <span className="lead text-muted"> Welcome  <Link to={`/profile/${profile.handle}`}> {user.name} </Link> </span> 
                  </div>

                  <div className="card">
                      <div className="Column_grid_3"> 
                        <div> <center> <i className="material-icons">traffic</i><br/> Wittwer Online </center> </div>
                        <div> <center> <i className="material-icons">compare_arrows</i><br/>Wittwer Connect </center> </div>
                        <div> <center> <i className="material-icons">account_balance</i><br/>Warehousing </center> </div>
                        <div> <center> <i className="material-icons">waves</i><br/>Ocean Track </center> </div>
                    </div>
                  </div>

              </div>

                  <div id="center_dashboard_column">

                     <div className="card"><Experience experience= {profile.experience}/> </div>
                     <div className="card"><Education education={profile.education} /> </div>

                   <div className="card"> <BarChart/> </div>

                    

                    <div className="card"> <LineChart/> </div>
                  </div>

                  <div id="right_dashboard_column">
                    <ProfileActions />

                    <div className="card"> <PieChart />  </div>

                  </div>

              </div>  {/* END Dashboard_Wrapper  */}

                <div className="SpaceBetween"> 
                    <div> </div>
                    <div><button onClick={this.onDeleteClick.bind(this)} className="btn grey darken-3">Delete My Account </button>
                    </div>
                </div>

            </div>
        )
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="Title">Welcome {user.name}</p>
            <div className='alert_gray'>
            <p>You have not yet setup a profile, please add some info.</p>
            </div>
            <Link to="/create-profile" className="btn btn-lg btn-info Button">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
        <div className="Container">
          
              <h1 className="MainTitle">Dashboard</h1>
              {dashboardContent}
            </div>
        
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
