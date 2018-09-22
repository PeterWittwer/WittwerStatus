
import React from 'react';
import PropTypes from 'prop-types';



const Shared_post = ({ postImg, comment, post }) => {

const Posts = post.map(post => (
    <div className="post_wrapper">
            <div className="post_category">
            <p>contribution</p>
            </div>

                <div className="post_container">
                    <center><img src={post.postImg}/></center>
                </div>
              
            <div className="post_description">
                <p> {post.comment} </p>
            </div>
      </div>
))

  return (
    <div>
     {Posts}
    </div>
  );
};

Shared_post.propTypes = {
    post: PropTypes.array.isRequired
  
};

Shared_post.defaultProps = {
  type: 'text'
};

export default Shared_post;


