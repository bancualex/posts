import React from 'react';
import './Post.css';
import { useParams } from 'react-router-dom';
import { usePostState, useLoginState } from '../../store/index';
import DetailedPost from '../DetailedPost/DetailedPost';

const Post = () => {
  const { id } = useParams();
  const loginState = useLoginState();
  const postState = usePostState();

  const { defaultComponentMessage } = loginState;

  React.useEffect(() => {
    console.log(defaultComponentMessage, " Post component");
  }, []);

  const displayedPost = postState.posts.find(post => post.id === id);

  return (
    <div className="Post" data-testid="Post">
      <DetailedPost post={displayedPost}></DetailedPost>
    </div>
  );
}

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
