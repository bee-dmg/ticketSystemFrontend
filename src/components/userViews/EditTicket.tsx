import React from 'react';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function EditTicket(props:{editTicket:Function, ticket:any}){
    const ticket = props.ticket;
       const [title, setTitle] = useState(ticket.title);
       const [description, setDescription] = useState(ticket.description);

        return(
        <div>
        
        <Form>
      <Form.Group className="mb-3" controlId="formTicket">
        <Form.Label>Ticket Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e:any)=>{setTitle(e.target.value); console.log(title);}} />
        <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e:any)=>{setDescription(e.target.value); console.log(description);}} />
        <Form.Control type="select" placeholder="status"></Form.Control>
      </Form.Group>
        <Button onClick={()=>{props.editTicket({title:title,status:"open",date: new Date(), description: description})}}>Submit</Button>
    
        </Form>
        
        
        </div>
        
        
        )
}


export default EditTicket;
