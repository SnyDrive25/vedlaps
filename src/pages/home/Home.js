import React from 'react';
import './Home.css';
import logo from '../../images/logo.png';

function Home() {
  return (
    <div className="Home">
      <img src={logo} alt="logo"></img>
      <h1>VedLaps</h1>
      <h2>Le podcast de Vinci Eco Drive</h2>
    </div>
  );
}

export default Home;