import React from 'react';
import './DetailedPost.css';

const DetailedPost = ({post: {id, title, username, description, comments}, onPostClick = () => {}}) => (
  <div className="DetailedPost" data-testid="DetailedPost" key="{id}" onClick={((e) => onPostClick(e, id))}>
    <div>{username}: </div>
    {/* <div>Title: {title}</div> */}
    <div>{description}</div>
    <br/>
    <div>Comments:</div>
    {comments.map(comment => {
      return (<div>{comment.username}: {comment.text}</div>)
    })}
  </div>
)

DetailedPost.propTypes = {};

DetailedPost.defaultProps = {};

export default DetailedPost;
