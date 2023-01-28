import React from 'react';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function AddTicket(props:{newTicket:Function}){
       const [title, setTitle] = useState();
       const [description, setDescription] = useState();
       const [reporter, setReporter] = useState();
        return(
        <div>
        
        <Form>
      <Form.Group className="mb-3" controlId="formTicket">
        <Form.Label>Ticket Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e:any)=>{setTitle(e.target.value); console.log(title);}} />
        <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e:any)=>{setDescription(e.target.value); console.log(description);}} />
        <Form.Control type="text" placeholder="Enter reporter" value={reporter} onChange={(e:any)=>{setReporter(e.target.value); console.log(description);}} />
       
      </Form.Group>
        <Button onClick={()=>{props.newTicket({title:title,status:"open",date: new Date(), description: description, reporter:reporter})}}>Submit</Button>
        
        </Form>
        
        
        </div>
        
        
        )
}


export default AddTicket;
