import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import TicketType from './interfaces/TicketInterface';
import Status from './interfaces/StatusEnum';
function App() { 
  const [apiTickets, setApiTickets] = useState();

useEffect(()=>{  fetch('http://localhost:8080/api/tickets')
.then((response) => response.json())
.then((data) => setApiTickets(data));},[]);
  let tickets:Array<TicketType>=[];
if(apiTickets)
   console.log(apiTickets)
  
  return (
    <div className="App">
     <Main tickets={tickets} />
    </div>
  )
}

export default App;
