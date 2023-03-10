import React,{useEffect} from "react";
import AddTicket from "./userViews/AddTicket";
import TicketQueueView from "./userViews/TicketQueueView";
import EditTicket from "./userViews/EditTicket";
import TicketType from "../interfaces/TicketInterface";
import Dashboard from "./userViews/Dashboard";
import Status from "../interfaces/StatusEnum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleTicket from "./userViews/SingleTicket";

export default function UserViewRouter(props: {
  tickets: Array<TicketType>;
  newTicket: Function;
  editTicket: Function;
  deleteTicket: Function;
  updateStatus: Function;
  setTickets: Function;
  currentTicket:any;
  setCurrentTicket:Function;
  ticketAdded:boolean;
  setTicketAdded:Function;
  status?:Status;
  setStatus?:Function;
}) {
  const tickets = props.tickets;
  const setTickets = props.setTickets;
  const deleteTicket = props.deleteTicket;
  const updateStatus = props.updateStatus;
  const newTicket = props.newTicket;
  const currentTicket=props.currentTicket;
  const setCurrentTicket=props.setCurrentTicket;
  const ticketAdded=props.ticketAdded;
  const setTicketAdded=props.setTicketAdded;
  const status = props.status;
  const setStatus = props.setStatus;

  useEffect(()=>{},[status])
  return (
    <div>
      <Routes>
        <Route
          path="/add"
          element={<AddTicket newTicket={props.newTicket} tickets={tickets} />}
        />

        <Route
          path="/"
          element={
            <Dashboard currentTicket={currentTicket} setCurrentTicket={setCurrentTicket} updateStatus={updateStatus} tickets={tickets} setTickets={setTickets} newTicket={newTicket} ticketAdded={ticketAdded} setTicketAdded={setTicketAdded} />
          }
        />

        <Route
          path="/view/:ticketId"
          element={
            <SingleTicket
              tickets={tickets}
              setTickets={setTickets}
              updateStatus={updateStatus}
            />
          }
        />

        <Route
          path="/edit/:ticketId"
          element={
            <EditTicket
            setTickets={setTickets}
              updateStatus={updateStatus}
              editTicket={props.editTicket}
              tickets={tickets}
              deleteTicket={deleteTicket}
            />
          }
        />
      </Routes>
    </div>
  );
}
