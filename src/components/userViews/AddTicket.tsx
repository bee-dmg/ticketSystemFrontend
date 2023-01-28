import React from 'react';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function AddTicket(props:{newTicket:Function}){
       const [title, setTitle] = useState();
        return(
        <div>
        
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={title} onChange={(e:any)=>{setTitle(e.target.value); console.log(title);}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
        <Button onClick={()=>{props.newTicket({title:title,status:"open",date: new Date().getTime()})}}>Submit</Button>
        
        </Form>
        
        
        </div>
        
        
        )
}


export default AddTicket;
