import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TicketType from '../../interfaces/TicketInterface';
import "../../styles/styles.css";
function TicketQueueView(props: { tickets: Array<TicketType> }) {

    const [tickets, setTickets] = useState(props.tickets);
    const [sortPref, setSortPref] = useState("dateUp");
    let date = tickets.sort((a: TicketType, b: TicketType) => a.date > b.date ? 1 : -1);

    if (sortPref === "dateDown") {

        date = tickets.sort((a: TicketType, b: TicketType) => a.date > b.date ? -1 : 1);

    }

    useEffect(() => {
        setTickets(date);
    }, [])
    if (date.length > 0) {
        return (
            <><div>Sort By: 
                <Link to="#" onClick={() => setSortPref("dateUp")}>Oldest First</Link> 
                / 
                <Link  to="#" onClick={() => setSortPref("dateDown")}>Newest First</Link> 
                </div>
                <div className="row">
                   
                    <div className="col-3">Title</div>
                    </div>{tickets.map((ticket: TicketType) => <div className="row ticketQueueViewRow" key={ticket.key}>
                        <div className="col-2"><Link to={`/view/${ticket.ticketNumber}`}>{ticket.ticketNumber}</Link></div>
                        <div className="col-3">Date:{ticket.date.toDateString()} {ticket.date.getHours()}:{ticket.date.getMinutes()}</div>
                    
                        <div className="col-2">Title:{ticket.title}</div><div className="col-2">Status:{ticket.status.toLowerCase()}</div>
                    <div className="col-2">Reporter:{ticket.reporter}</div>
                  <div className="col-12">Description:{ticket.description}</div>

            </div>)}</>
        )
    }
    else {
        return (<div>No tickets, yet!</div>)
    }
}


export default TicketQueueView;
