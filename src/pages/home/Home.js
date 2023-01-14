import React from 'react';
import './Home.css';
//import { useState } from 'react';

function Home() {

  // https://open.spotify.com/embed/playlist/37i9dQZF1DWYVURwQHUqnN?utm_source=generator

  return (
    <div className="Home">
      <h1>VedLaps</h1>
      <h2>Le podcast de Vinci Eco Drive</h2>
      <div className='spot'>
        <iframe title='lap1' className='spot-elmt' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default Home;