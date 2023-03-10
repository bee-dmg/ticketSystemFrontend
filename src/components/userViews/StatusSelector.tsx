import React,{useEffect} from "react";
import Status from "../../interfaces/StatusEnum";
import "../../styles/styles.css";
import TicketType from "../../interfaces/TicketInterface";
import { Form } from "react-bootstrap";
function StatusSelector(props: {
  status: any;
  setStatus: any;
  updateStatus: Function;
  ticket:TicketType;
}) {
  const status = props.status;
  const setStatus = props.setStatus;
  const ticket = props.ticket;

  return (
    <>
      <div className="statusInput">
        <Form.Select
          aria-label="status selector"
          className="statusInput"
          value={status}
          onChange={(e: any) => {
            setStatus(e.target.value);
            setTimeout(()=>{props.updateStatus(ticket, status);},1000);
           
             console.log(status);
          }}
        >
          <option value={Status.OPEN}>Open</option>
          <option value={Status.READY}>Ready</option>
          <option value={Status.IN_PROGRESS}>In Progress</option>
          <option value={Status.CLOSED}>Closed</option>
        </Form.Select>
      </div>
    </>
  );
}

export default StatusSelector;
