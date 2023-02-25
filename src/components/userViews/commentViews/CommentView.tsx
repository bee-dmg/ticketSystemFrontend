import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentType from "../../../interfaces/CommentInterface";
import CommentApiCall from "../../../apiCall/commentApiCall";
import "../../../styles/styles.css";
import Sort from "../Sort";
function CommentView(props: {
    comments: Array<CommentType>;
    setComments: Function;
}) {
    const comments = props.comments;
    const setComments = props.setComments;
    const [sortPref, setSortPref] = useState("dateUp");
    let date = comments.sort((a: CommentType, b: CommentType) =>
        a.date > b.date ? 1 : -1
    );
    useEffect(() => {
        CommentApiCall(setComments);
    }, []);
    // useEffect(() => {
    //   apiCall(setTickets);
    // }, [tickets]);
    if (sortPref === "dateDown") {
        date = comments.sort((a: CommentType, b: CommentType) =>
            a.date > b.date ? -1 : 1
        );
    }
    if(comments!==undefined){
    return (
       <div>
        <Sort setSortPref={setSortPref} />
        <div>{comments.map((comment: CommentType) => (<div key={comment.id}><div>ID: {comment.id}</div><div>User: {comment.user}</div><div>Time Posted: {comment.date.toString()}</div><div>{comment.comment}</div></div>))}
        </div>
    </div>

    )}
else return(<></>)}

export default CommentView;
