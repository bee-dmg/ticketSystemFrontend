import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import TicketType from "../../interfaces/TicketInterface";
import StatusSelector from "./StatusSelector";

import apiCall from "../../apiCall/ticketApiCall";

function EditTicket(props: {
  updateStatus: Function;
  deleteTicket: Function;
  editTicket: Function;
  tickets: Array<TicketType>;
  setTickets: Function;
}) {
  let ticketId: any = useParams();
  const tickets = props.tickets;
  const updateStatus = props.updateStatus;
  const setTickets = props.setTickets;
  let ticket = tickets.find(
    (element) => element.ticketNumber === ticketId.ticketId
  );
  useEffect(() => {
    apiCall(setTickets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ticket = tickets.find(
      (element) => element.ticketNumber === ticketId.ticketId
    );
    if (ticket && statusA==="" ) {

      setStatusA(ticket.status);
    }


  }, [ticket])
  if (ticket === undefined) {
    throw new TypeError("The value was promised to always be there!");
  }
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const [statusA, setStatusA] = useState("");

  if (ticket) {
    return (
      <div>
        <Link to={`/view/${ticket.ticketNumber}`}>Back to Ticket</Link>
        <Form>
          <Form.Group className="mb-3" controlId="formTicket">
            <Form.Label>Ticket Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e: any) => {
                setTitle(e.target.value);
              }}
            />
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={(e: any) => {
                setDescription(e.target.value);
              }}
            />

            <StatusSelector
              status={statusA}
              setStatus={setStatusA}
              updateStatus={updateStatus}
            />
          </Form.Group>
          <Link to={`/view/${ticket.ticketNumber}`}>
            <Button
              onClick={() => {
                if (ticket) {
                  props.editTicket({
                    ticketNumber: ticket.ticketNumber,
                    title: title,
                    status: statusA,
                    email: ticket.email,
                    date: new Date(),
                    reporter: ticket.reporter,
                    description: description,
                  });
                }
              }}
            >
              Submit
            </Button>
          </Link>

          <Link to={`/`}>
            <Button
              className="warning"
              onClick={() => {
                if (ticket) {
                  props.deleteTicket(ticket);
                }
              }}
            >
              Delete
            </Button>
          </Link>
        </Form>
      </div>
    );
  } else {
    return <div>No Ticket found, please try again. ERROR: EditTicket.tsx</div>;
  }
}

export default EditTicket;
