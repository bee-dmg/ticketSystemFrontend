import React from 'react';
import { useState, useContext } from 'react';
import TicketsContext from '../context/ticketsContext';

function UserView(props:{view:string,setView:Function, tickets:any, newTicket:Function}) { 
    const view = props.view;
  
   const tickets = useContext(TicketsContext);
   console.log(tickets);
   console.log(Object.values(tickets).length);
   const ticketsLength = Object.values(tickets).length;
switch(view){
    case "current":
        if(ticketsLength===0){
return(<div>pizza</div>)
        }
        
        return(<div>current ticket view
            <div>{Object.values(tickets).map((ticket:any)=><div><div>Heading:{ticket.heading}</div><div>Status:{ticket.status}</div><div>Date: {ticket.date}</div></div>)}</div>
        </div>)
    case "add":
        return(<div onClick={()=>{props.newTicket({heading:"test",status:"test",date:"test"}); console.log(tickets)}}>Add a ticket view</div>)
}
return(
    <></>
)
}

export default UserView;
