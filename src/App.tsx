import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  const tickets:Array<{title:string,status:string, description:string, date:Date}>=[{title:'Lemon',status:"closed", description:"pizza", date: new Date()}];
  return (
    <div className="App">
     <Main tickets={tickets} />
    </div>
  )
}

export default App;
