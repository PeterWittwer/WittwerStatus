import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from  '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import Spinner from '../common/Spinner';
 import { getPost } from '../../actions/postActions';
import { Link } from 'react-router-dom';
import {Button} from 'react-materialize';

 class Post extends Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }

  render() {
   const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <CommentForm postId={post._id} />

          <div className="row">
            <div className="col s12 m4">
              <PostItem post={post} showActions={false} />
            </div>
            <div className="col s12 m8">
              <CommentFeed postId={post._id} comments={post.comments} />
            </div>
          </div>

        </div>
      );
    }

    return (
      <div className="post">
        <div className="Container">
            <Link to="/feed">
              <Button floating large className='CircleButton' waves='light' icon='arrow_back' />

              </Link>
              {postContent}
        </div>
      </div>
    );
  }
}


Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    post: state.post
  });
  
  export default connect(mapStateToProps, { getPost })(Post);
  