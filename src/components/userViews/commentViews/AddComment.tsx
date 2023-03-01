import React, {useState} from "react";

import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import TicketType from "../../../interfaces/TicketInterface";
function AddComment(props:{setCommentView:Function, ticket:TicketType, newComment:Function, dashboard?:boolean}) {
    const setCommentView=props.setCommentView;
    const ticket=props.ticket;
    const ukey: string = uuid();
    const [ user, setUser]=useState("");
    const [title, setTitle]=useState("");
    const [ comment, setComment]=useState("");
  return (
    <div>

   {props.dashboard?<></>:<div onClick={()=>{setCommentView("")}}><Link to="">Back to Comments</Link></div>}

    <Form >
        <Form.Group className="mb-3" controlId="formTicket">
        <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
          />
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter comment"
            value={comment}
            onChange={(e: any) => {
              setComment(e.target.value);
            }}
          /><Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={user}
            onChange={(e: any) => {
              setUser(e.target.value);
            }}
          />
         
        
        </Form.Group>
       
          {" "}
          <Button type="submit"
            onClick={(e) => {setCommentView("");
            e.preventDefault();
              props.newComment({
                ticketNumber: ticket.ticketNumber,
                keyValue: ukey,
              
                title: title,
             
                date: new Date(),
                comment: comment,
                user: user,
              });
            }}
          >
            Submit
          </Button>
       
      </Form>
</div>
  );
}

export default AddComment;
