import React from 'react';
import './DetailedPost.css';

const DetailedPost = ({post: {id, username, description, comments}, onPostClick = () => {}}) => (
  <div className="DetailedPost" data-testid="DetailedPost" onClick={((e) => onPostClick(e, id))}>
    <div>{username}: </div>
    <div>{description}</div>
    <br/>
    <div>Comments:</div>
    {comments.map(comment => {
      return (<div key={comment.username+comment.text}>{comment.username}: {comment.text}</div>)
    })}
  </div>
)

DetailedPost.propTypes = {};

DetailedPost.defaultProps = {};

export default DetailedPost;
