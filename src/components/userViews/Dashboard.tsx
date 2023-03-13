import React,{useState} from 'react';
import TicketType from '../../interfaces/TicketInterface';
import { Link } from 'react-router-dom';
import TicketQueueView from './TicketQueueView';
import AddTicket from './AddTicket';
import "../../styles/styles.css";
import SingleTicketDashboard from './SingleTicketDashboard';
import AddComment from './commentViews/AddComment';
import commentApiCall from '../../apiCall/commentApiCall';
import Status from '../../interfaces/StatusEnum';
import { current } from '@reduxjs/toolkit';

function Dashboard(props: {
    tickets: Array<TicketType>;
    setTickets: Function;
    newTicket:Function;
    updateStatus:Function;
    currentTicket:TicketType;
    setCurrentTicket:Function;
    ticketAdded:boolean;
    setTicketAdded:Function;
    
  }){
   const tickets = props.tickets;
   const setTickets = props.setTickets;
   const newTicket = props.newTicket;
   const updateStatus = props.updateStatus;
  const currentTicket=props.currentTicket;
  const setCurrentTicket=props.setCurrentTicket;
  const [commentAdded,setCommentAdded]=useState(false);
 const ticketAdded=props.ticketAdded;
 const setTicketAdded=props.setTicketAdded;

  return (
    <div>
<TicketQueueView tickets={tickets} setTickets={setTickets} setCurrentTicket={setCurrentTicket} currentTicket={currentTicket}/>
<div className="dashboardWhole">
<div className="addTicketDashboard">
<AddTicket tickets ={tickets} newTicket={newTicket} ticketAdded={ticketAdded} setTicketAdded={setTicketAdded}/></div>
<div className="singleTicketDashboard">
<SingleTicketDashboard updateStatus={updateStatus} tickets={tickets} setTickets={setTickets} currentTicket={currentTicket} commentAdded={commentAdded} setCommentAdded={setCommentAdded} /></div>

<div className="addCommentDashboard">
    {currentTicket?<AddComment ticket={currentTicket} setCommentView={()=>{}} newComment={(comment:any)=>{commentApiCall((()=>{}),"/","POST",comment);}} dashboard={true} setCommentAdded={setCommentAdded} commentAdded={commentAdded}/>:<div>Please select a ticket to view comments.</div>}
    </div></div>
  </div>
  )

}

export default Dashboard;
