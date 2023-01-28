import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  const tickets:Array<any>=[];
  return (
    <div className="App">
     <Main tickets={tickets} />
    </div>
  );
}

export default App;
