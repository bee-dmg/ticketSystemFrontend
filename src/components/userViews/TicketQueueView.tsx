import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
function TicketQueueView(props:{tickets:any}) { 
 
   const tickets = props.tickets;
   console.log(tickets);
return(
    <>{tickets.map((ticket:any)=><Card className="m-3"><div><div>Title:{ticket.title}</div><div>Status:{ticket.status}</div><div>Reporter:{ticket.reporter}</div><div>Date:{ticket.date.toDateString()}</div><div>Description:{ticket.description}</div>
    
    </div></Card>)}</>
)
}

export default TicketQueueView;
