import React from 'react';
import NavBar from './NavBar';
import UserViewRouter from './UserViewRouter';
import TicketType from '../interfaces/TicketInterface';
import Status from '../interfaces/StatusEnum';
function Main(props: any) {

  const tickets = props.tickets;

  function newTicket(ticket: TicketType) {
    tickets.push(ticket);
  }
  function editTicket(ticket: TicketType) {
    tickets[ticket.ticketNumber] = ticket;

  }
  function updateStatus(ticket: TicketType, status: Status) {
    tickets[ticket.ticketNumber] = { ...ticket, status: status };
  }
  return (
    <div className="App">
      <NavBar />
      <UserViewRouter tickets={tickets} newTicket={newTicket} editTicket={editTicket} updateStatus={updateStatus} />
    </div>
  );
}

export default Main;
