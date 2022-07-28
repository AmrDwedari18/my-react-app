import React from 'react';
import { Header, SpecialMenu, Navbar, Footer, Error, Import, Mailer } from './container';
import './App.css';

import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <div>
      <Navbar />

      <Routes>
      <Route exact path="/" element={<Header />} />
      <Route exact path="/SpecialMenu" element={<SpecialMenu />} />
      <Route exact path="/Error" element={<Error />} />
      <Route exact path="/Footer" element={<Footer />} />
      <Route exact path="/Import" element={<Import />} />
      <Route exact path="/Mailer" element={<Mailer />} />
      </Routes>
    </div>

);
  }
export default App;

