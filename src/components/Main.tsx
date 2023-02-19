import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import UserViewRouter from "./UserViewRouter";
import TicketType from "../interfaces/TicketInterface";
import Status from "../interfaces/StatusEnum";
import apiCall from "../apiCall/apiCall";
import { Container } from "react-bootstrap";
function Main() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    apiCall(setTickets);

    const interval = setInterval(() => {
      console.log("This will run every second!");
      apiCall(setTickets);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  function deleteTicket(ticket: TicketType) {
    apiCall(setTickets, ticket.id.toString(), "DELETE", ticket);
  }

  function newTicket(ticket: TicketType) {
    apiCall(setTickets, "/", "POST", ticket);
  }
  function editTicket(ticket: TicketType) {
    apiCall(setTickets, ticket.ticketNumber.toString(), "PUT", ticket);
  }

  function updateStatus(ticket: TicketType, status: Status) {
    const updateTicket = { ...ticket, status: status };
    //non functioning needs work with backend
    apiCall(setTickets, ticket.ticketNumber.toString(), "PUT", updateTicket);
  }
  if (tickets)
    return (
      <div className="App">
        <NavBar />
        <Container>
          <UserViewRouter
            tickets={tickets}
            newTicket={newTicket}
            editTicket={editTicket}
            deleteTicket={deleteTicket}
            updateStatus={updateStatus}
            setTickets={setTickets}
          />
        </Container>
      </div>
    );
  else
    return (
      <div className="App">
        Error, please try refreshing. ERROR: No tickets in Main.tsx Check API
      </div>
    );
}

export default Main;
