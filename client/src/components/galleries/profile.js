
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const GalleriesMap = ({ galleries }) => {

const Gallerie = galleries.map(item => (
    <div>
        <center className="gallery_title">{item.year}</center>
        <NavLink to="/gallery/#id"> 
        <img src={item.thumbnail}/>
        </NavLink>
    </div>
))

  return (
    <div className="gallery_wrapper">
        {Gallerie}
    </div>
  );
};

GalleriesMap.propTypes = {
    galleries: PropTypes.array.isRequired
  
};

GalleriesMap.defaultProps = {
  type: 'text'
};

export default GalleriesMap;


