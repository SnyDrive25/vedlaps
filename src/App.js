import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Links from './pages/links/Links';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/links" element={<Links />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
