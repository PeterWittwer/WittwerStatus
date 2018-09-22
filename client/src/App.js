import React, { Component } from 'react';
import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from  './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';


//Genepull views
import Layout from './components/Home/';
import Contributions from './components/contributions';
import Galleries from './components/galleries';
import Gallery from './components/gallery';
import Recipes from './components/recipes';
import Recipe from './components/recipe';
import Tutorials from './components/tutorials';
import Tutorial from './components/tutorial';
import Medical from './components/medical';
// import Career from './networkScreens/career';
import ProfileView from './components/Profile_social';



//import AppNavbar from './components/AppNavbar';
import PrivateRoute from './components/common/PrivateRoute';
//import Template from './pages/testing';
import Shipments from './components/shipments/Shipments';
// import Shipment from './components/shipment/Shipment';
import Details from './components/shipment/Details';
import Tracking from './components/shipment/Tracking';

//import Details from './components/shipment/Details';

//import Individual_Shipment from './pages/individualShipment';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Notfound from './components/not-found/Notfound';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';






//import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';


//import 'bootstrap/dist/css/bootstrap.min.css';
   //COMMENT
 import './App.css';

// Check for token
if(localStorage.jwtToken) {
    //Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and experation. Checks with every page request.
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    //Check for expired token
    const currentTime = Date.now() / 3000;
    if(decoded.exp < currentTime) {
        //Logout User
        store.dispatch(logoutUser());
        //Clear current Profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/login';
    }
}
   
    class App extends Component {
    render() {
        return (


            <Provider store={store}>
            <Router>
            <div className="App">
                <Navbar/>

                <Route exact path="/" component={Landing} />
                <div> 
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path="/profile/:handle" component={Profile} />

                    <Switch>
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    </Switch>

                    <Switch>
                    <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                    </Switch>

                    <Switch>
                    <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                    </Switch>

                    <Switch>
                    <PrivateRoute exact path="/add-experience" component={AddExperience} />
                    </Switch>

                    <Switch>
                    <PrivateRoute exact path="/add-education" component={AddEducation} />
                    </Switch>

                    <Switch>
                    <PrivateRoute exact path="/feed" component={Posts} />
                    </Switch>

                    <Switch>
                    <PrivateRoute exact path="/post/:id" component={Post} />
                    </Switch>

                    <Route exact path="/not-found" component={Notfound} />

                    <Switch>
                    <PrivateRoute exact path="/shipments" component={Shipments} />
                    </Switch>

                    <Switch>
                    <Route exact path="/genepull" component={Layout} />
                    </Switch>

                    <Switch>
                    <Route exact path="/account" component={ProfileView} />
                    </Switch>

                     <Switch>
                    <Route exact path="/contributions" component={Contributions} />
                     </Switch>

                     <Switch>
                    <Route exact path="/galleries" component={Galleries} />
                     </Switch>

                     <Switch>
                    <Route exact path="/gallery" component={Gallery} />
                     </Switch>

                    <Switch>
                    <Route exact path="/recipes" component={Recipes} />
                    </Switch>

                    <Switch>
                    <Route exact path="/recipe" component={Recipe} />
                    </Switch>

                    <Switch>
                    <Route exact path="/tutorials" component={Tutorials} />
                    </Switch>

                    <Switch>
                    <Route exact path="/tutorial" component={Tutorial} />
                    </Switch>

                    <Switch>
                    <Route exact path="/medical" component={Medical} />
                    </Switch>

                    {/* <Switch>
                    <PrivateRoute exact path="/shipment/:id/:item" component={Shipment} />
                    </Switch> */}

                    <Switch>
                    <PrivateRoute exact path="/shipment/:id/details" component={Details} />
                    </Switch>

                    <Switch>
                    <PrivateRoute exact path="/shipment/:id/tracking" component={Tracking} />
                    </Switch>

                </div>
                {/* <Route exact path="/:id" component={Details} /> */}
                {/* <Route  path="/individual-shipment/:id" component={Individual_Shipment}  />  */}
             </div>
            </Router>
            </Provider>
            );
        }
    }

export default App;
