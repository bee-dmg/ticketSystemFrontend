import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import TicketType from './interfaces/TicketInterface';
import Status from './interfaces/StatusEnum';
function App() { 
  fetch('http://localhost:8080/api/tickets', )
  .then((response) => response.json())
  .then((data) => console.log(data));

  const tickets:Array<TicketType>=[];
  return (
    <div className="App">
     <Main tickets={tickets} />
    </div>
  )
}

export default App;
