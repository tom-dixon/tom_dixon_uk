import React from 'react';
import logo from './images/svg/td-2023-outline-noBG.svg';
import stripes from './images/png/EUROPE-United_Kingdom-Berkshire-1863-2021-UR.png';

import './App.css';
import Socials from './components/Socials/Socials';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Tom Dixon
        </h1>
        <p className="occupation">Software developer</p>
        <Socials />
      </header>
      <img src={stripes} className="App-footer" alt="footer" />
    </div>
  );
}

export default App;
