import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TicketType from "../../interfaces/TicketInterface";
import apiCall from "../../apiCall/ticketApiCall";
import Sort from "./Sort";
import "../../styles/styles.css";
function TicketQueueView(props: {
  tickets: Array<TicketType>;
  setTickets: Function;
  setCurrentTicket?:Function;
  currentTicket?:TicketType;
}) {
  const tickets = props.tickets;
  const setTickets = props.setTickets;
  const [sortPref, setSortPref] = useState("dateUp");
  const setCurrentTicket=props.setCurrentTicket;
  const currentTicket = props.currentTicket;
  let date = tickets.sort((a: TicketType, b: TicketType) =>
    a.date > b.date ? 1 : -1
  );
  useEffect(() => {
    apiCall(setTickets);
  }, []);
  // useEffect(() => {
  //   apiCall(setTickets);
  // }, [tickets]);
  if (sortPref === "dateDown") {
    date = tickets.sort((a: TicketType, b: TicketType) =>
      a.date > b.date ? -1 : 1
    );
  }
  return (
    <>
    <Sort setSortPref={setSortPref}/> <div className="ticketQueueView">
      <div className="row">
      <div className="col-2">Project</div>{" "}
        <div className="col-1">Ticket</div>{" "}
        <div className="col-2">Date</div>
         <div className="col-4">Title</div>
        <div className="col-1">Status</div>{" "}
        <div className="col-1">Reporter</div>
      </div>
      {tickets.map((ticket: TicketType) => (
       
        <div className={currentTicket && currentTicket.id === ticket.id ? 'currentSelectedQueue row ticketQueueViewRow': "row ticketQueueViewRow"} key={ticket.key} onClick={()=>{console.log(ticket.ticketNumber); if(setCurrentTicket){setCurrentTicket(ticket);}}}>
            {/* <div 
      className={currentTicket && currentTicket.id === ticket.id ? 'test': undefined} 
      
    > */}
          <div className="col-2">{ticket.projectName}</div>
          <div className="col-1">
            <Link to={`/view/${ticket.ticketNumber}`}>
              {ticket.ticketNumber}
            </Link>
          </div>
          <div className="col-2">
            {new Date(ticket.date).toDateString()}
          </div>
          <div className="col-4">{ticket.title}</div>
          <div className="col-1">{ticket.status.toLowerCase()}</div>
          <div className="col-1">{ticket.reporter}</div>
          </div>
        // </div>
      ))}
      </div>
    </>
  );
}

export default TicketQueueView;
