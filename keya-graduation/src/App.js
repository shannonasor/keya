import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import './App.css';

import Landing from './Landing/Landing';
import DaysTimer from './DaysTimer/DaysTimer';

function App() {
  return (
    <Router>
      <div className="container">
      <div className="main-content">
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
          </Routes>
        </div>
        <div className="main-content">
          <DaysTimer />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
