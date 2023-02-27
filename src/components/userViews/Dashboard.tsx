import React,{useState} from 'react';
import TicketType from '../../interfaces/TicketInterface';
import { Link } from 'react-router-dom';
import TicketQueueView from './TicketQueueView';
import AddTicket from './AddTicket';
import "../../styles/styles.css";
import SingleTicket from './SingleTicket';

function Dashboard(props: {
    tickets: Array<TicketType>;
    setTickets: Function;
    newTicket:Function;
    updateStatus:Function;
  }){
   const tickets = props.tickets;
   const setTickets = props.setTickets;
   const newTicket = props.newTicket;
   const updateStatus = props.updateStatus;
   const[currentTicket,setCurrentTicket]=useState();
  return (
    <div>
<TicketQueueView tickets={tickets} setTickets={setTickets} setCurrentTicket={setCurrentTicket}/>
<div className="dashboardWhole">
<div className="addTicketDashboard">
<AddTicket tickets ={tickets} newTicket={newTicket}/></div>
<div className="singleTicketDashboard">
<SingleTicket updateStatus={updateStatus} tickets={tickets} setTickets={setTickets} currentTicket={currentTicket}/></div>
</div>
  </div>
  )
}

export default Dashboard;
