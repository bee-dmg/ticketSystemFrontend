import React from 'react';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import TicketType from '../../interfaces/TicketInterface';
import uuid from 'react-uuid';

function AddTicket(props: { newTicket: Function, tickets: Array<TicketType> }) {
  const [title, setTitle] = useState("");

  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [reporter, setReporter] = useState("");
  const ukey: string = uuid();
  const ticketNumber = props.tickets.length;
  return (
    <div>

      <Form>
        <Form.Group className="mb-3" controlId="formTicket">
          <Form.Label>Reporter</Form.Label>
          <Form.Control type="text" placeholder="Enter reporter" value={reporter} onChange={(e: any) => { setReporter(e.target.value) }} />
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e: any) => { setEmail(e.target.value) }} />
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e: any) => { setTitle(e.target.value) }} />
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e: any) => { setDescription(e.target.value) }} />

        </Form.Group>
        <Link to="/"> <Button onClick={() => { props.newTicket({ ticketNumber: ticketNumber, key: ukey, email: email, title: title, status: "OPEN", date: new Date(), description: description, reporter: reporter }) }}>Submit</Button>
        </Link>  {/* <Button onClick={()=>{dispatch({type:"add_ticket", payload:{title:title,status:"open",date: new Date(), description: description, reporter:reporter}})}}>Submit</Button> */}

      </Form>


    </div>


  )
}


export default AddTicket;
