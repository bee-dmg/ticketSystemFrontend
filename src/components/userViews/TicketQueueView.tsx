import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
function TicketQueueView(props:{tickets:any}) { 
 
   const [tickets, setTickets] = useState(props.tickets);
    const [sortPref, setSortPref]= useState("dateUp");
let date = tickets.sort((a:any, b:any) => a.date > b.date ? 1 : -1);

if(sortPref==="dateDown"){
  
    date = tickets.sort((a:any, b:any) => a.date > b.date ? -1 : 1);

}

    useEffect(()=>{
        setTickets(date);
    },[])
    if(date.length>0){
return(
    <><div>Sort By: <Button onClick={()=>setSortPref("dateUp")}>Newest First</Button> / <Button onClick={()=>setSortPref("dateDown")}>Newest First</Button> </div><div className="row"> <div className="col-3">Title</div></div>{tickets.map((ticket:any)=><div className="row"><div className="col-3">{ticket.ticketNumber}</div><div className="col-3">Title:{ticket.title}</div><div className="col-3">Status:{ticket.status}</div><div className="col-3">Reporter:{ticket.reporter}</div><div className="col-3">Date:{ticket.date.toDateString()} {ticket.date.getHours()}:{ticket.date.getMinutes()}:{ticket.date.getSeconds()}</div><div>Description:{ticket.description}</div>
    
    </div>)}</>
)}
else{
    return(<div>Error, please try again.</div>)
}
}


export default TicketQueueView;
