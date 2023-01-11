import React from 'react';
import './Home.css';
import logo from '../../images/logo.png';

function Home() {
  // https://open.spotify.com/embed/playlist/37i9dQZF1DWYVURwQHUqnN?utm_source=generator
  return (
    <div className="Home">
      <img src={logo} alt="logo"></img>
      <h1>VedLaps</h1>
      <h2>Le podcast de Vinci Eco Drive</h2>
      <div className='spot'>
        <iframe title='lap1' className='spot-elmt' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className='bg-triangle'></div>
      <div className='bg-carre'>
        <div className='boxes'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;