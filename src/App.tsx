import React from 'react';
import { Countdown } from './hooks/useTime/Countdown';
import { ConfigSection } from './hooks/useConfiguration/ConfigSection';
import { ConfigurationContext } from './hooks/useConfiguration';
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
        <ConfigurationContext.Provider value={{ baseurl: 'https://jamesfulford.com', env: 'prod' }}>
          <ConfigSection />
        </ConfigurationContext.Provider>
      </header>
    </div>
  );
}

export default App;
