import React from 'react';
import "./App.scss";
import Contents from './Components/Contents';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <Contents />
      </div>
    </div>
  );
}

export default App;
