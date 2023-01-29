import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Button, Form, InputGroup } from 'react-bootstrap';
import TicketType from '../../interfaces/TicketInterface';
function StatusSelector(props:{status:any,setStatus:any}) { 
    enum Status{
        OPEN="OPEN",
        READY="READY",
        IN_PROGRESS="IN_PROGRESS",
        CLOSED="CLOSED",
       
      
      }
      const updateStatus= props.status;
      const setUpdateStatus=props.setStatus;
 
return(
    <><div>
    <Form.Select aria-label="Default select example" value={updateStatus} onChange={(e:any)=>{setUpdateStatus(e.target.value)}}>
      
    <option value={Status.OPEN}>Open</option>
    <option value={Status.READY}>Ready</option>
    <option value={Status.IN_PROGRESS}>In Progress</option>
    <option value={Status.CLOSED}>Closed</option>
  </Form.Select>
    </div></>
)}




export default StatusSelector;
