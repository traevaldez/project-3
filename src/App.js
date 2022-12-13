import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! This is a test!
        </p>
        {/* <a>
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
