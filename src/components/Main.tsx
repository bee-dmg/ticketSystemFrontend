import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import UserViewRouter from './UserViewRouter';
import { redirect } from "react-router-dom";
import TicketType from '../interfaces/TicketInterface';
function Main(props:any) { 
    
  const tickets = props.tickets;


    function newTicket(ticket:TicketType){
        tickets.push(ticket);
    }
    function editTicket(ticket:TicketType){
      console.log(ticket);
      console.log(tickets);
      console.log(ticket.ticketNumber);
      console.log(tickets[ticket.ticketNumber]);
      tickets[ticket.ticketNumber]=ticket;
      console.log(tickets);
    }
  return (
    <div className="App">
      <NavBar />
        <UserViewRouter tickets={tickets} newTicket={newTicket} editTicket={editTicket}/>
    </div>
  );
}

export default Main;
