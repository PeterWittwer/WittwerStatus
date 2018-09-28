import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div>
        <div className="Post_Wrapper dark_gray z-depth-2">
            <div>
              <center><img style={{width: '60px'}} className="circle responsive-img" src={post.avatar} alt="" /></center>
               <center> <p style={{margin: '0px'}} className="title teal-text text-lighten-2">{post.name}</p></center>
            </div>
            
            
            <div> 
              <p className="Title">Topic </p> 
              <span className="white-text">{post.text}</span>
              

              <br/><br/>
              {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="social_btn"
                >
                  <i className={classnames('material-icons', { 'text-info': this.findUserLike(post.likes) })}
                  >thumb_up</i>
                   <span className=""> {post.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="social_btn"
                >
                  <i className="material-icons">thumb_down</i>
                </button>
                <Link to={`/post/${post._id}`} className="social_btn">
                <i className="material-icons">question_answer</i>
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="social_btn"
                  >
                    <i className="material-icons">close</i>
                  </button>
                ) : null}
              </span>
            ) : null}
            

            </div>

        </div>
      </div>

   

      
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
