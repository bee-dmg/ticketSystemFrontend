import React from 'react';
import { Button } from 'react-bootstrap';


function NavBar(props:{view:string,setView:Function}) {
   console.log(props);
  return (
    <div className="App">
        <Button onClick={()=>{props.setView("add"); console.log(props.view);}}>Add a Ticket</Button>

     <Button onClick={()=>{props.setView("current")}}>Ticket Queue</Button>
    
    </div>
  );
}

export default NavBar;
