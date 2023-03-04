import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import TicketType from "../../interfaces/TicketInterface";
import StatusSelector from "./StatusSelector";
import apiCall from "../../apiCall/ticketApiCall";
import commentApiCall from "../../apiCall/commentApiCall";
import CommentType from "../../interfaces/CommentInterface";
import CommentView from "./commentViews/CommentView";
import Status from "../../interfaces/StatusEnum";
function SingleTicket(props: {
  tickets: Array<TicketType>;
  updateStatus: Function;
  setTickets: Function;
  currentTicket?:any;
}) {
  const [comments, setComments] = useState<any>([]);
  const tickets = props.tickets;
  const setTickets = props.setTickets;
  const updateStatus = props.updateStatus;
  const currentTicket=props.currentTicket;
  let ticketId: any = useParams();
  if(!ticketId.ticketId){
  if(currentTicket){
    ticketId.ticketId=currentTicket.ticketNumber;

  }
}

 

  let ticket = tickets.find(
    (element) => element.ticketNumber === ticketId.ticketId
  );

  
  const [status, setStatus] = useState(Status.CLOSED);

  useEffect(() => {
    commentApiCall(setComments);
    apiCall(setTickets);
    if(ticket)
setStatus(currentTicket.status);



  }, [currentTicket,setTickets]);

  let commentFiltered = comments.filter((element: CommentType) => element.ticketNumber === ticketId.ticketId);







  if (ticket) {
    
    const date = new Date(ticket.date);
    return (
      <>
        <div key={ticket.key}>
       
          <div className="row">
            <div>Project: {ticket.projectName}</div>
            <div>Ticket: {ticket.ticketNumber}</div>
            <div>
              {" "}
              Date:{date.toDateString()} {date.getHours()}:{date.getMinutes()}:
              {date.getSeconds()}
            </div>

            <div className="col-12">Title:{ticket.title}</div>
            <div
              className="col-3"
              onMouseOut={() => {
                props.updateStatus(ticket, status);
              }}
            >
                 <Link to={`/edit/${ticket.ticketNumber}`}>Edit Ticket</Link>

              <StatusSelector
                status={status}
                setStatus={setStatus}
                updateStatus={updateStatus}
              />
            </div>
            <div className="col-3">
              <div className="col-3">Email:{ticket.email}</div>
              <div className="col-3">Reporter:{ticket.reporter}</div>
            </div>
            <div>Description:{ticket.description}</div>
              <CommentView ticket={ticket} comments={commentFiltered} setComments={setComments} />
          
          </div>
        </div>
      </>
    );
  } else {
    return <div>No ticket available. Please try again.</div>;
  }
}

export default SingleTicket;
