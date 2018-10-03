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

                  <div className="SpaceBetween"> 
                    <div> 
                    <span className="lead text-muted"> Welcome  <Link to={`/profile/${profile.handle}`}> {user.name} </Link> </span> 
                    </div>
                    <div> 
                    <ProfileActions />
                    </div>
                  </div>

          <div className="Dashboard_Wrapper"> 
                 
            <div className="card sites">
                <div className="Column_grid_3"> 
                  <div> <center> <i className="material-icons">traffic</i><br/> Wittwer Online </center> </div>
                  <div> <center> <i className="material-icons">compare_arrows</i><br/>Wittwer Connect </center> </div>
                  <div> <center> <i className="material-icons">account_balance</i><br/>Warehousing </center> </div>
                  <div> <center> <i className="material-icons">waves</i><br/>Ocean Track </center> </div>
              </div>
            </div>

            <div className="card experience"> 
            <Experience experience= {profile.experience}/> 
            </div>


            <div className="card barchart"> 
            <BarChart/> 
            </div>

            <div className="card education">
            <Education education={profile.education} /> 
            </div>

            


            <div className="card linechart"> 
            <LineChart/> 
            </div>


            <div className="card piechart"> 
            <PieChart />  
            </div>


              <div className="card"> 
                  <h4>7</h4> 
             </div>
             
              <div className="card"> 
                  <h4>8</h4> 
             </div>
              <div className="card"> 
                  <h4>9</h4> 
             </div>
              <div className="card"> 
                  <h4>10</h4> 
             </div>
              <div className="card"> 
                  <h4>11</h4> 
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
