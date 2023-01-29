import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
function SingleTicket(props:{tickets:any}) { 
 
  const tickets = props.tickets;
let ticketId:any= useParams();
let ticket = tickets[parseInt(ticketId.ticketId)];
console.log(ticketId.ticketId);
console.log(parseInt(ticketId.ticketId));
console.log(tickets);
return(
    <><div className="row"><div className="col-3">{ticket.ticketNumber}</div><div className="col-3">Title:{ticket.title}</div><div className="col-3">Status:{ticket.status}</div><div className="col-3">Reporter:{ticket.reporter}</div><div className="col-3">Date:{ticket.date.toDateString()} {ticket.date.getHours()}:{ticket.date.getMinutes()}:{ticket.date.getSeconds()}</div><div>Description:{ticket.description}</div>
    
    </div></>
)}




export default SingleTicket;
