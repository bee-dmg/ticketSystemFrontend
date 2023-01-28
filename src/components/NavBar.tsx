import React from 'react';


function NavBar(props:{view:string,setView:Function}) {
   console.log(props);
  return (
    <div className="App">
        <div onClick={()=>{props.setView("add"); console.log(props.view);}}>Add a Ticket</div>

     <div onClick={()=>{props.setView("current")}}>Current Tickets:</div>
    
    </div>
  );
}

export default NavBar;
