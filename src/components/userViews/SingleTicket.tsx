import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import TicketType from "../../interfaces/TicketInterface";
import StatusSelector from "./StatusSelector";
import apiCall from "../../apiCall/apiCall";
function SingleTicket(props: {
  tickets: Array<TicketType>;
  updateStatus: Function;
  setTickets: Function;
}) {
  const tickets = props.tickets;
  const setTickets = props.setTickets;
  const updateStatus = props.updateStatus;
  let ticketId: any = useParams();

 
  let ticket = tickets.find(
    (element) => element.ticketNumber === ticketId.ticketId
  );
  useEffect(() => {
    apiCall(setTickets);
    let x = 0;
    if(ticket&&x<5){
    setStatus(ticket.status)
    }
    x++;
  }, [ticket, setTickets]);

 


  let oldStatus="";
  
    if(ticket ){ oldStatus = ticket.status };
  

  const [status, setStatus] = useState(oldStatus);

  if (ticket) {
    const date = new Date(ticket.date);
    return (
      <>
        <div key={ticket.key}>
          <Link to={`/edit/${ticket.ticketNumber}`}>Edit Ticket</Link>

          <div className="row">
            <div>Ticket: {ticket.ticketNumber}</div>
            <div>
              {" "}
              Date:{date.toDateString()} {date.getHours()}:{date.getMinutes()}:
              {date.getSeconds()}
            </div>

            <div className="col-12">Title:{ticket.title}</div>
            <div
              className="col-3"
              onMouseUp={() => {
                props.updateStatus(ticket, status);
              }}
            >
              <StatusSelector
                status={status}
                setStatus={setStatus}
                updateStatus={updateStatus}
              />
            </div>
            <div className="col-3">
              <div className="col-3">Email:{ticket.email}</div>
              <div className="col-3">Reporter:{ticket.reporter}</div>
            </div>
            <div>Description:{ticket.description}</div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>No ticket available. Please try again.</div>;
  }
}

export default SingleTicket;
