import React from 'react';
import { Link } from 'react-router-dom';
import CommentType from '../../../interfaces/CommentInterface';

function SingleComment(props: {
  comment: CommentType;
  deleteComment: Function;
  setCommentView: Function;
  setSingleComment: Function;
}) {
  const comment = props.comment;
  const deleteComment = props.deleteComment;
  const setCommentView = props.setCommentView;
  const setSingleComment = props.setSingleComment;
  return (
    <div>
      <div>User: {comment.user}</div>
      <div>
        Time Posted: {new Date(comment.date).toLocaleTimeString()}{' '}
        {new Date(comment.date).toDateString()}
      </div>
      <div>{comment.title}</div>
      <div>{comment.comment}</div>
      <div
        onClick={() => {
          deleteComment(comment);
        }}
      >
        del
      </div>
      <div
        onClick={() => {
          setSingleComment(comment);
          setCommentView('edit');
        }}
      >
        edit
      </div>
    </div>
  );
}

export default SingleComment;
