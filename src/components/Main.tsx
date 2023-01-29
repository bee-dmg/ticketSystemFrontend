import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import UserViewRouter from './UserViewRouter';
import { redirect } from "react-router-dom";
function Main(props:any) { 
    
  const tickets = props.tickets;


    function newTicket(ticket:any){
        tickets.push(ticket);
    }
  return (
    <div className="App">
      <NavBar />
        <UserViewRouter tickets={tickets} newTicket={newTicket}/>
    </div>
  );
}

export default Main;
