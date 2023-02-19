import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import UserViewRouter from './UserViewRouter';
import TicketType from '../interfaces/TicketInterface';
import Status from '../interfaces/StatusEnum';
function Main() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {

    fetch('http://localhost:8080/api/tickets')
    .then((response) => response.json())
    .then((data) => {setTickets(data); 
    });
    
    const interval = setInterval(() => {
      console.log('This will run every second!');
      fetch('http://localhost:8080/api/tickets')
    .then((response) => response.json())
    .then((data) => {setTickets(data); 
    }).catch((error) => {
      console.error('Error:', error);
      setTickets([])
    });
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  function callAPI(url:string, methodType:string,ticket:TicketType){
    fetch(url, {
  method: methodType, // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(ticket),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  fetch('http://localhost:8080/api/tickets')
    .then((response) => response.json())
    .then((data) => {setTickets(data);} )
  }

  function newTicket(ticket: TicketType) {
    callAPI('http://localhost:8080/api/tickets','POST',ticket);
  }
  function editTicket(ticket: TicketType) {
    callAPI('http://localhost:8080/api/tickets/'+ticket.ticketNumber,'PUT', ticket)
  }
  function updateStatus(ticket: TicketType, status: Status) {
    // tickets[ticket.key] = { ...ticket, status: status };
    //non functioning needs work with backend
  }
  if(tickets)
  return (
    <div className="App">
      <NavBar />
      <UserViewRouter tickets={tickets} newTicket={newTicket} editTicket={editTicket} updateStatus={updateStatus} setTickets={setTickets}/>
    </div>
  );
  else
  return(   <div className="App">
 Error, please try refreshing. 
 
 ERROR: No tickets in Main.tsx 
 Check API</div>)
}

export default Main;
