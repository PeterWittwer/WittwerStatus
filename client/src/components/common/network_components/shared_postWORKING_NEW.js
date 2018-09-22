
import React from 'react';
import PropTypes from 'prop-types';



const Shared_post = ({
    postImg,
    comment,
  
}) => {
  return (
    <div className="post_wrapper">
            <div className="post_category">
            <p>contribution</p>
            </div>

                <div className="post_container">
                    <center><img src={postImg}/></center>
                </div>
              
            <div className="post_description">
                <p> {comment} </p>
            </div>
      </div>
  );
};

Shared_post.propTypes = {
    postImg: PropTypes.string,
    comment: PropTypes.string,
  
};

Shared_post.defaultProps = {
  type: 'text'
};

export default Shared_post;


 