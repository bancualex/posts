import React from 'react';
import './Post.css';
import { useParams } from 'react-router-dom';
import { usePostState, useLoginState } from '../../store/index';
import DetailedPost from '../DetailedPost/DetailedPost';
import Comments from '../Comments/Comments';
// import {fetch} from 'fetch';

const Post = () => {
  const { id } = useParams();
  const loginState = useLoginState();
  const postState = usePostState();

  const { defaultComponentMessage } = loginState;
  const { comments, loadCommentsForPost, posts } = postState;

  React.useEffect(() => {
    console.log(defaultComponentMessage, " Post component");

    loadCommentsForPost(displayedPost.id);
  }, []);

  const displayedPost = posts.find(post => post.id === parseInt(id));

  return (
    <div className="Post" data-testid="Post">
      <DetailedPost post={displayedPost}></DetailedPost>
      <Comments comments={comments}></Comments>
    </div>
  );
}

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
