import React from "react";
import AddTicket from "./userViews/AddTicket";
import TicketQueueView from "./userViews/TicketQueueView";
import EditTicket from "./userViews/EditTicket";
import TicketType from "../interfaces/TicketInterface";
import Dashboard from "./userViews/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleTicket from "./userViews/SingleTicket";

export default function UserViewRouter(props: {
  tickets: Array<TicketType>;
  newTicket: Function;
  editTicket: Function;
  deleteTicket: Function;
  updateStatus: Function;
  setTickets: Function;
}) {
  const tickets = props.tickets;
  const setTickets = props.setTickets;
  const deleteTicket = props.deleteTicket;
  const updateStatus = props.updateStatus;
  const newTicket = props.newTicket;
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
            <Dashboard updateStatus={updateStatus} tickets={tickets} setTickets={setTickets} newTicket={newTicket} />
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
