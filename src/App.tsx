import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { TicketsProvider } from './context/ticketsContext';

function App() {
  const tickets:Array<any>=[];
  return (
    <TicketsProvider value={[]}>
    <div className="App">
     <Main tickets={tickets} />
    </div>
    </TicketsProvider>
  )
}

export default App;
