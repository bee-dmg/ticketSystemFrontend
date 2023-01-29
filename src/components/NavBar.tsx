import React from 'react';
import { Button } from 'react-bootstrap';

import {

    Link
  } from "react-router-dom";
  
  

function NavBar() {
 
  return (
    <div className="App">
           <Link to="/add">
        <Button >Add a Ticket</Button></Link>
        <Link to="/">
     <Button >Ticket Queue</Button>
    </Link>
    </div>
  );
}

export default NavBar;
