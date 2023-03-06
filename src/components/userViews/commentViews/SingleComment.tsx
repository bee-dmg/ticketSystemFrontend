import React from 'react';
import { Link } from 'react-router-dom';
import CommentType from '../../../interfaces/CommentInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


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
    <div className="userComment">
      <div className="userCommentHeader">{new Date(comment.date).toLocaleTimeString()}{' '}
        {new Date(comment.date).toDateString()} by {comment.user}</div>
     
      <div className="userCommentTitle">{comment.title}</div>
      <div>{comment.comment}</div>
      <div className="deleteComment" onClick={() => {
          deleteComment(comment);
        }}
      >
        <Button><FontAwesomeIcon icon={faTrash} /></Button>
      </div>
      <div className="editComment"
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
