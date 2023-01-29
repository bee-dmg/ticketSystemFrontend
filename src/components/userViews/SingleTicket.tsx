import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
function SingleTicket(props:{ticket:any}) { 
 
  const ticket = props.ticket;


return(
    <><div className="row"><div className="col-3">{ticket.ticketNumber}</div><div className="col-3">Title:{ticket.title}</div><div className="col-3">Status:{ticket.status}</div><div className="col-3">Reporter:{ticket.reporter}</div><div className="col-3">Date:{ticket.date.toDateString()} {ticket.date.getHours()}:{ticket.date.getMinutes()}:{ticket.date.getSeconds()}</div><div>Description:{ticket.description}</div>
    
    </div></>
)}




export default SingleTicket;
