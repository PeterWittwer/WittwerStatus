
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const RecipiesMap = ({ recipies }) => {

    const Recipe = recipies.map(item => (
        <div className="column_flex_container thumbnail_container">
            <div className="thumbnail_title">
            <NavLink to="/recipe"><h4>{item.title}</h4></NavLink>
            </div>
            <div className="thumnail_img">
            <img src={item.thumbnail}/>
            </div>
            <div className="thumbnail_description">
            <p>{item.description} </p>
            </div>
        </div> 
    ))

  return (
      <div>
        <div id="thumbnail_list_wrapper"> 
        {Recipe}
        </div>
    </div>
  );
};

RecipiesMap.propTypes = {
    recipies: PropTypes.array.isRequired
  
};

RecipiesMap.defaultProps = {
  type: 'text'
};

export default RecipiesMap;


