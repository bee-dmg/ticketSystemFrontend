import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import TicketType from './interfaces/TicketInterface';
import Status from './interfaces/StatusEnum';
function App() { 
 

  const tickets:Array<TicketType>=[];
  return (
    <div className="App">
     <Main tickets={tickets} />
    </div>
  )
}

export default App;
