import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import UserView from './UserViewRouter';
function Main(props:any) { 
    
    const [view,setView]=useState("current");
  const tickets = props.tickets;


    function newTicket(ticket:any){
        tickets.push(ticket);
        setView("complete");
      console.log(tickets);
    }
  return (
    <div className="App">
      <NavBar view={view} setView={setView}/>
        <UserView view={view} setView={setView} tickets={tickets} newTicket={newTicket}/>
    </div>
  );
}

export default Main;
