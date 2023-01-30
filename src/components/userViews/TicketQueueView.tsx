import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TicketType from '../../interfaces/TicketInterface';
import StatusSelector from './StatusSelector';
function TicketQueueView(props:{tickets:Array<TicketType>}) { 
 
   const [tickets, setTickets] = useState(props.tickets);
    const [sortPref, setSortPref]= useState("dateUp");
let date = tickets.sort((a:TicketType, b:TicketType) => a.date > b.date ? 1 : -1);

if(sortPref==="dateDown"){
  
    date = tickets.sort((a:TicketType, b:TicketType) => a.date > b.date ? -1 : 1);

}

    useEffect(()=>{
        setTickets(date);
    },[])
    if(date.length>0){
return(
    <><div>Sort By: <Button onClick={()=>setSortPref("dateUp")}>Oldest First</Button> / <Button onClick={()=>setSortPref("dateDown")}>Newest First</Button> </div><div className="row"> <div className="col-3">Title</div></div>{tickets.map((ticket:TicketType)=><div className="row"><div className="col-3"><Link to={`/view/${ticket.ticketNumber}`}>{ticket.ticketNumber}</Link></div><div className="col-3">Title:{ticket.title}</div><div><StatusSelector status={ticket.status} setStatus={"pizza"}/></div><div className="col-3">Status:{ticket.status.toLowerCase()}</div><div className="col-3">Reporter:{ticket.reporter}</div><div className="col-3">Date:{ticket.date.toDateString()} {ticket.date.getHours()}:{ticket.date.getMinutes()}:{ticket.date.getSeconds()}</div><div>Description:{ticket.description}</div>
    
    </div>)}</>
)}
else{
    return(<div>Error, please try again.</div>)
}
}


export default TicketQueueView;
