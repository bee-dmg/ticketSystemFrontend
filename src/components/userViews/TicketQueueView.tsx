import React from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
function TicketQueueView(props:{tickets:any}) { 
 
   const [tickets, setTickets] = useState(props.tickets);
    const [sortPref, setSortPref]= useState("dateUp");

    if(sortPref==="dateUp"){
        console.log(sortPref);
        console.log(tickets);
return(
    <><div>Sort By: <Button onClick={()=>setSortPref("dateUp")}>Oldest First</Button> / <Button onClick={()=>setSortPref("dateDown")}>Newest First</Button> </div>{tickets.map((ticket:any)=><Card className="m-3"><div><div>Title:{ticket.title}</div><div>Status:{ticket.status}</div><div>Reporter:{ticket.reporter}</div><div>Date:{ticket.date.toDateString()} {ticket.date.getHours()}:{ticket.date.getMinutes()}:{ticket.date.getSeconds()}</div><div>Description:{ticket.description}</div>
    
    </div></Card>).sort((a:any, b:any) => a.date > b.date ? 1 : -1)}</>
)}
if(sortPref==="dateDown"){
    console.log(tickets);
    console.log(sortPref);
    return(
        <><div>Sort By: <Button onClick={()=>setSortPref("dateUp")}>Oldest First</Button> / <Button onClick={()=>setSortPref("dateDown")}>Newest First</Button> </div>{tickets.map((ticket:any)=><Card className="m-3"><div><div>Title:{ticket.title}</div><div>Status:{ticket.status}</div><div>Reporter:{ticket.reporter}</div><div>Date:{ticket.date.toDateString()} {ticket.date.getHours()}:{ticket.date.getMinutes()}:{ticket.date.getSeconds()}</div><div>Description:{ticket.description}</div>
        
        </div></Card>).sort((a:any, b:any) => a.date > b.date ? -1 : 1)}</>
    )}
    return(
        <div>Hello</div>
    )
}


export default TicketQueueView;
