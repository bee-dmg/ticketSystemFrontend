import React, {useState} from 'react';
import NavBar from './NavBar';
import UserViewRouter from './UserViewRouter';
import TicketType from '../interfaces/TicketInterface';
import Status from '../interfaces/StatusEnum';
function Main() {
  const [tickets, setTickets] = useState([]);

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
  }

  function newTicket(ticket: TicketType) {
    callAPI('http://localhost:8080/api/tickets','POST',ticket);

  }
  function editTicket(ticket: TicketType) {
    callAPI('http://localhost:8080/api/tickets/'+ticket.ticketNumber,'PUT', ticket)

  }
  function updateStatus(ticket: TicketType, status: Status) {
    // tickets[ticket.key] = { ...ticket, status: status };
  }
  return (
    <div className="App">
      <NavBar />
      <UserViewRouter tickets={tickets} newTicket={newTicket} editTicket={editTicket} updateStatus={updateStatus} setTickets={setTickets}/>
    </div>
  );
}

export default Main;
