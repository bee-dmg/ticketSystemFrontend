import React from 'react';
import { Button } from 'react-bootstrap';

import {

    Link
  } from "react-router-dom";
  
  

function NavBar() {
 
  return (
    <div className="App">
           <Link to="/add">
        Add a Ticket</Link> <span> / </span>
        <Link to="/">
    Ticket Queue
    </Link>
    </div>
  );
}

export default NavBar;
