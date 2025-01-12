import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftPanel from '../LeftPanel';
import Home from '../pages/Home';
import About from '../pages/About';
import Bookings from '../pages/Bookings';

const AppRouter = () => (
  <Router>
    <LeftPanel />
    <div className="content">
      <Routes>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/bookings" component={Bookings} />
      </Routes>
    </div>

  </Router>
);

export default AppRouter;
