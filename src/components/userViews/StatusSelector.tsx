import React from 'react';
import Status from '../../interfaces/StatusEnum';
import "../../styles/styles.css";
import {  Form } from 'react-bootstrap';
function StatusSelector(props: { status: any, setStatus: any }) {
 
    const updateStatus = props.status;
    const setUpdateStatus = props.setStatus;

    return (
        <><div>
            <Form.Select aria-label="Default select example" className="statusInput" value={updateStatus} onChange={(e: any) => { setUpdateStatus(e.target.value) }}>

                <option value={Status.OPEN}>Open</option>
                <option value={Status.READY}>Ready</option>
                <option value={Status.IN_PROGRESS}>In Progress</option>
                <option value={Status.CLOSED}>Closed</option>
            </Form.Select>
        </div></>
    )
}




export default StatusSelector;
