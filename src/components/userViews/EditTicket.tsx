import React from 'react';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import TicketType from '../../interfaces/TicketInterface';
import StatusSelector from './StatusSelector';

function EditTicket(props:{editTicket:Function, tickets:Array<TicketType>}){

    let ticketId:any= useParams();

  const tickets = props.tickets;
let ticket = tickets[parseInt(ticketId.ticketId)];
   
       const [title, setTitle] = useState(ticket.title);
       const [description, setDescription] = useState(ticket.description);
        const[updateStatus,setUpdateStatus]=useState(ticket.status);
       enum Status{
        OPEN="OPEN",
        READY="READY",
        IN_PROGRESS="IN_PROGRESS",
        CLOSED="CLOSED",
       
      
      }

        return(
        <div>
        
        <Form>
      <Form.Group className="mb-3" controlId="formTicket">
        <Form.Label>Ticket Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e:any)=>{setTitle(e.target.value); console.log(title);}} />
        <Form.Control as="textarea"  rows={3} placeholder="Enter description" value={description} onChange={(e:any)=>{setDescription(e.target.value); console.log(description);}} />
       
    <StatusSelector status={updateStatus} setStatus={setUpdateStatus} />
      </Form.Group>
        <Link to={`/view/${ticket.ticketNumber}`}><Button onClick={()=>{props.editTicket({ticketNumber:ticket.ticketNumber,title:title,status:updateStatus,date: new Date(), reporter:ticket.reporter,description: description})}}>Submit</Button>
        </Link>
        </Form>
        
        
        </div>
        
        
        )
}


export default EditTicket;
