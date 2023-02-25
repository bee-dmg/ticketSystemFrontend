import React from "react";
import { Link } from "react-router-dom";
import CommentType from "../../../interfaces/CommentInterface";

function SingleComment(props:{comment:CommentType; deleteComment:Function;}) {
    const comment = props.comment;
    const deleteComment = props.deleteComment;
  return (
    <div key={comment.id}><div>User: {comment.user}</div><div>Time Posted: {new Date (comment.date).toLocaleTimeString()} {new Date (comment.date).toDateString()}</div><div>{comment.title}</div><div>{comment.comment}</div>
    <div onClick={()=>{deleteComment(comment)}}>del</div></div>
  );
}

export default SingleComment;
