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
}) {
  const tickets = props.tickets;
  const setTickets = props.setTickets;
  const [sortPref, setSortPref] = useState("dateUp");
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
    <Sort setSortPref={setSortPref}/>
      <div className="row">
        <div className="col-2">Ticket Number</div>{" "}
        <div className="col-2">Date</div> <div className="col-2">Title</div>
        <div className="col-2">Status</div>{" "}
        <div className="col-2">Reporter</div>
      </div>
      {tickets.map((ticket: TicketType) => (
        <div className="row ticketQueueViewRow" key={ticket.key}>
          <div className="col-2">
            <Link to={`/view/${ticket.ticketNumber}`}>
              {ticket.ticketNumber}
            </Link>
          </div>
          <div className="col-2">
            Date:{new Date(ticket.date).toDateString()}
          </div>
          <div className="col-2">{ticket.title}</div>
          <div className="col-2">{ticket.status.toLowerCase()}</div>
          <div className="col-2">{ticket.reporter}</div>
        </div>
      ))}
    </>
  );
}

export default TicketQueueView;
