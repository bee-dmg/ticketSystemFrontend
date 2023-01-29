import React from 'react';
import { useState } from 'react';
import AddTicket from './userViews/AddTicket';
import TicketQueueView from './userViews/TicketQueueView';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
  





export default function UserViewRouter(props:{tickets:any, newTicket:Function}) {
    const tickets=props.tickets;
  return (
    
      <div>
    {/* //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav> */}

   <Routes>
          <Route path="/add" element={  <AddTicket newTicket={props.newTicket} tickets={tickets}/>} />
       
          <Route path="/" element={<TicketQueueView tickets={tickets} />} />
          
          
          </Routes>
       
      </div>
    
  );
}