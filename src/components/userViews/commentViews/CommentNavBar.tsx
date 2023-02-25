import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/styles.css";
function CommentNavBar(props:{setCommentView:Function}) {
const setCommentView = props.setCommentView;
    return (
       <div>
    <div onClick={()=>{setCommentView("add"); console.log("yolo")}}>Add Comment </div>
    </div>

    )}

export default CommentNavBar;
