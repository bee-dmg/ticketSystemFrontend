import React from 'react';
import AddTicket from './userViews/AddTicket';
import TicketQueueView from './userViews/TicketQueueView';
import EditTicket from './userViews/EditTicket';
import TicketType from '../interfaces/TicketInterface';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, useParams
} from "react-router-dom";
import SingleTicket from './userViews/SingleTicket';



export default function UserViewRouter(props: { tickets: Array<TicketType>, newTicket: Function, editTicket: Function, updateStatus: Function , setTickets:Function}) {
    const tickets = props.tickets;
    const setTickets=props.setTickets;
    return (
        <div>
            <Routes>
                <Route path="/add" element={<AddTicket newTicket={props.newTicket} tickets={tickets} />} />

                <Route path="/" element={<TicketQueueView tickets={tickets} setTickets={setTickets} />} />

                <Route path="/view/:ticketId" element={<SingleTicket tickets={tickets}  setTickets={setTickets} updateStatus={props.updateStatus} />} />

                <Route path="/edit/:ticketId" element={<EditTicket editTicket={props.editTicket} tickets={tickets} />} />
            </Routes>

        </div>

    );
}