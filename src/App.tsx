import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import TicketType from './interfaces/TicketInterface';

function App() { 
  enum Status{
  OPEN="OPEN",
  READY="READY",
  IN_PROGRESS="IN_PROGRESS",
  CLOSED="CLOSED",
 

}

  const tickets:Array<TicketType>=[{ticketNumber:0,key:"5",title:'Lemon',status:Status.CLOSED,description:"pizza",reporter:"larry", email:"larry@b.com", date: new Date()}];
  return (
    <div className="App">
     <Main tickets={tickets} />
    </div>
  )
}

export default App;
