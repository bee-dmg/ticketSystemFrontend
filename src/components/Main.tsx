import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import UserViewRouter from './UserViewRouter';
function Main(props:any) { 
    
  const tickets = props.tickets;


    function newTicket(ticket:any){
        tickets.push(ticket);
      console.log(tickets);
    }
  return (
    <div className="App">
      <NavBar />
        <UserViewRouter tickets={tickets} newTicket={newTicket}/>
    </div>
  );
}

export default Main;
