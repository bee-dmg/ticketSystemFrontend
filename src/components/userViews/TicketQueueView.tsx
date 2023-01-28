import React from 'react';
import { useState } from 'react';

function TicketQueueView(props:{tickets:any}) { 
 
   const tickets = props.tickets;
   console.log(tickets);
return(
    <>{tickets.map((ticket:any)=><div><div>Heading:{ticket.title}</div><div>Status:{ticket.status}</div><div>Date:{ticket.date}</div>
    
    </div>)}</>
)
}

export default TicketQueueView;
