import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentType from "../../../interfaces/CommentInterface";
import commentApiCall from "../../../apiCall/commentApiCall";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import "../../../styles/styles.css";
import TicketType from "../../../interfaces/TicketInterface";
import Sort from "../Sort";
import CommentNavBar from "./CommentNavBar";
function CommentView(props: {
    comments: Array<CommentType>;
    setComments: Function;
    ticket: TicketType;
}) {
    const comments = props.comments;
    const setComments = props.setComments;
    const [sortPref, setSortPref] = useState("dateUp");
    const [commentView, setCommentView]=useState("");
    let date = comments.sort((a: CommentType, b: CommentType) =>
        a.date > b.date ? 1 : -1
    );
    useEffect(() => {
        commentApiCall(setComments);
    }, [setComments]);

    function newComment (comment:CommentType){
        commentApiCall(setComments,"/","POST",comment);
    }
    function deleteComment(comment:CommentType){
        commentApiCall(setComments, comment.id.toString(), "DELETE", comment);
    }
   

   
    // useEffect(() => {
    //   apiCall(setTickets);
    // }, [tickets]);
    if (sortPref === "dateDown") {
        date = comments.sort((a: CommentType, b: CommentType) =>
            a.date > b.date ? -1 : 1
        );
    }
    if(commentView==="add"){
        return(<AddComment ticket={props.ticket} newComment={newComment} setCommentView={setCommentView}/>)
    }

    if(comments!==undefined){
        console.log(comments)
    return (
       <div>
        <CommentNavBar setCommentView={setCommentView}/>
        <Sort setSortPref={setSortPref} />
        <div>{comments.map((comment: CommentType) => (<SingleComment comment={comment} deleteComment={deleteComment}/>))}
        </div>
    </div>

    )}

   
else return(<></>)}

export default CommentView;
