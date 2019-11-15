import React from 'react';
import { Countdown } from './hooks/useTime/Countdown';
import logo from './logo.svg';
import './App.css';
import { DateTime } from 'luxon';

const App: React.FC = () => {
  const end = DateTime.local().plus({ seconds: 5 });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code><Countdown end={end} /></code>
      </header>
    </div>
  );
}

export default App;
