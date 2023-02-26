import React from 'react';
import TicketType from '../../interfaces/TicketInterface';
import { Link } from 'react-router-dom';
import TicketQueueView from './TicketQueueView';
import AddTicket from './AddTicket';
import "../../styles/styles.css";

function Dashboard(props: {
    tickets: Array<TicketType>;
    setTickets: Function;
    newTicket:Function;
  }){
   const tickets = props.tickets;
   const setTickets = props.setTickets;
   const newTicket = props.newTicket;
  return (
    <div>
<TicketQueueView tickets={tickets} setTickets={setTickets} />
<div className="addTicketDashboard">
<AddTicket tickets ={tickets} newTicket={newTicket}/>
</div>
  </div>
  )
}

export default Dashboard;
