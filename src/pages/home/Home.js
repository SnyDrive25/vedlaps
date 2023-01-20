import React from 'react';
import './Home.css';
import phone from '../../images/iphone.png';

function Home() {

  // https://open.spotify.com/embed/playlist/37i9dQZF1DWYVURwQHUqnN?utm_source=generator

  return (
    <div className="Home">
      <div className='master'>
        <div className='left'>
          <h1>VedLaps</h1>
          <h2>Le podcast</h2>
          <p>
            Ce podcast de Vinci Eco Drive
            vous propose de découvrir des
            personnalité en lien avec nos
            projet et l'association mais
            également des personnalités
            différentes apportant une
            nouvelle vision sur notre monde.
          </p>
          <button>Écouter le dernier épisode</button>
        </div>
        <div className='right'>
          <img src={phone} alt='vedlaps_iphone'></img>
        </div>
      </div>
      <div className='spot'>
        <h1>Le concept</h1>
        <iframe title='lap1' className='spot-elmt' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default Home;