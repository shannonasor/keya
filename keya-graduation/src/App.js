import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import './App.css';

import Landing from './Landing/Landing';
import DaysTimer from './DaysTimer/DaysTimer';
import AdviceCard from './AdviceCard/AdviceCard';

function App() {
  return (
    <Router>
      <div className="container">

      <div className="main-content">
          <Routes>
            <Route path="/" element={<Landing/>}></Route>

            {/* <Link to="/giveshakeyaadvice">Send Advice And Wishes To Graduate</Link> */}
            <Route path="/giveshakeyaadvice" element={<AdviceCard/>}></Route>
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
