
import React from "react";
import { Link } from 'react-router-dom';

const TopNavigation = (props) => {

	const divStyle = {
		backgroundColor: 'red'
	};
	
	return(
		<div>
		
		<nav  className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">

            <div className="navbar-header">
              
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="glyphicon glyphicon-align-justify"></span>
              </button>
              <a className="navbar-brand" href="about.php">
               {/* <img src="./img/transport-explorer-logo-white.png" />  */}
              </a>
            </div>

            {/* <div style={divStyle} className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown navspan">
                  <a href="./about" className="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
		
                    <span className="icon glyphicon glyphicon-cog"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-pills">
                      <a href="tools.php">
                        <span className="icon glyphicon glyphicon-wrench"></span>
                        Tools
                      </a>
                    </li>
                    <li role="separator" className="divider"></li>
                  </ul>
                </li>

                <li className="dropdown profile-box">
                  <a href="./about" className="dropdown-toggle"
                    data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span> Welcome Back: </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a>User ID: </a>
                    </li>
                    <li>
                      <a>User: </a>
                    </li>
                    <li>
                      <a>Company ID: </a>
                    </li>
                    <li>
                      <a>Company: </a>
                    </li>
                    <li>
                      <a href="logout.php">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div> */}

          </div>
        </nav>
		
		
		
		</div>
	);
};

//export TopNavigation;
 

const SideNavigation = (props) => {
	
		return (
		<div>
		
		  <ul className="sidebar-nav li-move">
       
			<li className="nav-pills">
				<Link className='active' to='/shipments'>
				<span className="icon glyphicon glyphicon-duplicate"></span>
				Shipments
				</Link>
			</li>
	
			<li className="nav-pills">
				<Link className='active' to='/status-monitor'>
				<span className="icon glyphicon glyphicon-duplicate"></span>
				Status Monitor
				</Link>
			</li>
	
			<li className="nav-pills">
				<Link className='active' to='/events'>
				<span className="icon glyphicon glyphicon-envelope"></span>
				Events
				</Link>
			</li>
	
			<li className="nav-pills">
				<Link className='active' to='/tools'>
				<span className="icon glyphicon glyphicon-credit-card"></span>
				Tools
				</Link>
			</li>
	
			<li className="nav-pills">
				<Link className='active' to='/reports'>
				<span className="icon glyphicon glyphicon-briefcase"></span>
				 Reports
				</Link>
			</li>
	
			<li className="nav-pills">
				<Link className='active' to='/dashboard'>
				<span className="icon glyphicon glyphicon-dashboard"></span>
				Old Reports
				</Link>
			</li>
	
			<li className="nav-pills">
				<Link className='active' to='/users'>
				<span className="icon glyphicon glyphicon-user"></span>
				Directory
				</Link>
			</li>
	
	
			<li className="nav-pills">
				<Link className='active' to='/status-key'>
				<span className="icon glyphicon glyphicon glyphicon-lamp"></span>
				Users
				</Link>
			</li>
	
			<li className="nav-pills">
				<Link className='active' to='/wittwer-contacts'>
				<span className="icon glyphicon glyphicon-globe"></span>
				Warehousing
				</Link>
			</li>

			<li className="nav-pills">
				<Link className='active' to='/client'>
				<span className="icon glyphicon glyphicon-globe"></span>
				Client
				</Link>
			</li>
								
		  <div id="spinnerWrapper">
			  <div className="spinner">
				  <div className="bounce1"></div>
				  <div className="bounce2"></div>
				  <div className="bounce3"></div>
			  </div>
		  </div>
			 
  </ul>
		
		</div>
		
	);
};
//export SideNavigation;
export { TopNavigation, SideNavigation };


