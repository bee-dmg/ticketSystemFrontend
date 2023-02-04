import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import TicketType from '../../interfaces/TicketInterface';
import StatusSelector from './StatusSelector';

function SingleTicket(props: { tickets: Array<TicketType>, updateStatus: Function }) {

    const tickets = props.tickets;
    let ticketId: any = useParams();
    let ticket = tickets[parseInt(ticketId.ticketId)];
    const [status, setStatus] = useState(ticket.status);

    return (
        <><div key={ticket.key}><Link to={`/edit/${ticket.ticketNumber}`}>Edit Ticket</Link></div><div className="row"><div className="col-3">{ticket.ticketNumber}</div><div className="col-3">Title:{ticket.title}</div><div onMouseOut={() => { props.updateStatus(ticket, status); console.log("pizza") }}><StatusSelector status={status} setStatus={setStatus} /></div><div className="col-3">Status:{status}</div><div className="col-3">Reporter:{ticket.reporter}</div><div className="col-3">Date:{ticket.date.toDateString()} {ticket.date.getHours()}:{ticket.date.getMinutes()}:{ticket.date.getSeconds()}</div><div>Description:{ticket.description}</div>

        </div></>
    )
}




export default SingleTicket;
