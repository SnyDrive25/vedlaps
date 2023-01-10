import React from 'react';
import './Home.css';
import logo from '../../images/logo.png';
import Spotify from 'react-spotify-embed';

function Home() {

  return (
    <div className="Home">
      <img src={logo} alt="logo"></img>
      <h1>VedLaps</h1>
      <h2>Le podcast de Vinci Eco Drive</h2>
      <div className='spot'>
        <Spotify wide link="https://open.spotify.com/episode/26h7TIS5bcpIjvHnCahWLG" className='spot-element' />
      </div>
    </div>
  );
}

export default Home;