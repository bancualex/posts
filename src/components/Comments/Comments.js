import React from 'react';
import './Comments.css';

const Comments = ({comments}) => {
  return (
    <div className="Comments" data-testid="Comments">
      {comments.map(comment => {
        return (
          <div className="Comment">
            <div>{comment.email}:</div>
            <div>{comment.name}: </div>
            <div>{comment.body}</div>
          </div>
        )
      })}
    </div>
  )};

Comments.propTypes = {};

Comments.defaultProps = {};

export default Comments;
