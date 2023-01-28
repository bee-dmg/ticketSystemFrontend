import React from 'react';
import { useState } from 'react';

function UserView(props:{view:string,setView:Function, tickets:any, newTicket:Function}) { 
    const view = props.view;
  
   const tickets = props.tickets;
   console.log(tickets.length);
switch(view){
    case "current":
        if(tickets.length===0){
return(<div>pizza</div>)
        }
        
        return(<div>current ticket view
            <div>{tickets.map((ticket:any)=><div><div>Heading:{ticket.heading}</div><div>Status:{ticket.status}</div><div>Date: {ticket.date}</div></div>)}</div>
        </div>)
    case "add":
        return(<div onClick={()=>{props.newTicket({heading:"test",status:"test",date:"test"}); console.log(tickets)}}>Add a ticket view</div>)
}
return(
    <></>
)
}

export default UserView;
