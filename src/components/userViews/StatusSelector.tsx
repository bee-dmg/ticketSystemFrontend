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

  const {status, setStatus, ticket, updateStatus}=props;



  useEffect(()=>{

    updateStatus(ticket, status);
   
  },[status,ticket])
  return (
    <>
      <div className="statusInput">
        <Form.Select
          aria-label="status selector"
          className="statusInput"
          value={status}
          onChange={(e: any) => {
            setStatus(e.target.value);
            updateStatus(ticket, e.target.value);
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
