import React from "react";
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const Contribution_subnav = (props) => {

    return (
        <div id="sub_nav_wrapper">
            <ul>
                <NavLink to="./contributions"> <li>All Contributions</li> </NavLink>
                <NavLink to="./galleries"> <li>Galleries</li> </NavLink>
                <NavLink to="./recipes"> <li>Recipes</li> </NavLink> 
                <NavLink to="./tutorials"> <li>Tutorials</li> </NavLink>
            </ul>
        </div>
    );
};
export { Contribution_subnav };


