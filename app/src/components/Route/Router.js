import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Bookings from '../pages/Bookings';
import Contact from '../pages/Contact';
import MenuBar from '../MenuBar';

const AppRouter = () => (
  <BrowserRouter>
    {/* <LeftPanel /> */}
    <header className="header">
      <div className="logo">travelbhakta</div>
      <MenuBar />
    </header>
    <div className="content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Bookings />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
