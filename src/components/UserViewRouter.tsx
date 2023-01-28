import React from 'react';
import { useState } from 'react';
import AddTicket from './userViews/AddTicket';
import TicketQueueView from './userViews/TicketQueueView';

function UserView(props:{view:string,setView:Function, tickets:any, newTicket:Function}) { 
    const view = props.view;
  
   const tickets = props.tickets;
   console.log(tickets.length);
switch(view){
    case "current":
        if(tickets.length===0){
return(<div>You're all done, no current tickets!</div>)
        }
        
        return(<div>current ticket view
            <div><TicketQueueView tickets={tickets} /></div>
        </div>)
    case "add":
        return(<AddTicket newTicket={props.newTicket}/>)
    case "complete":
        return(<div>Ticket Added!</div>)
}
return(
    <></>
)
}

export default UserView;
