import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }
 
  render() {
    const { comment, postId, auth } = this.props;
 
    return (
      <div className="Comment_Wrapper z-depth-2"> 
          <div>
            <a href="profile.html">
              <img style={{width: '65px'}} className="circle responsive-img" src={comment.avatar} alt="" />
            </a>

            <br />
          </div>

          <div className="Comment_box">
          
            
          <div> <p className="text-center">{comment.name}</p> </div>

            <div> <p className="lead">{comment.text}</p> </div>

            <div>
          {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                type="button"
                className="social_btn" 
              >
                <i className="material-icons">close</i>
              </button>
            ) : null}
           </div>

            
          </div>

      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
