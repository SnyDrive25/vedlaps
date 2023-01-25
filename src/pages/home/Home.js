import React from 'react';
import './Home.css';
import phone from '../../images/iphone.png';
import casque from '../../images/casque.png';
import amazon from '../../images/amazon-music.png';
import apple from '../../images/apple-podcast.png';
import deezer from '../../images/deezer.png';
import deezer_big from '../../images/deezer_big.png';
import spotify_big from '../../images/spotify_big.svg';
import youtube_big from '../../images/youtube_big.svg';
import amazon_big from '../../images/amazon_big.svg';

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
          <div className='logos'>
            <a href='https://music.amazon.fr/podcasts/a53f2fd7-196e-4153-9b67-cf94f1dc437c/vedlaps---le-podcast?refMarker=null' target="_blank" rel="noreferrer"><img src={amazon} alt="amazon-music"></img></a>
            <a href='https://podcasts.apple.com/fr/podcast/vedlaps-le-podcast/' target="_blank" rel="noreferrer"><img src={apple} alt="apple-podcast"></img></a>
            <a href='https://www.deezer.com/fr/show/5608237' target="_blank" rel="noreferrer"><img src={deezer} alt="deezer"></img></a>
          </div>
        </div>
        <div className='right'>
          <img src={phone} alt='vedlaps_iphone'></img>
          <img src={casque} alt='vedlaps_casque'></img>
        </div>
      </div>
      <a className='lk' name="concept" href='../#concept'> </a>
      <div className='spot'>
        <h1>Le concept</h1>
        <div className='flex'>
          <iframe title='lap1' className='spot-elmt-small' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowFullScreen="" loading="lazy"></iframe>
          <p>
            Vinci Eco Drive lance son propre podcast ! Mensuel, il vous fera
            découvir différentes personnalité ayant un rapport proche ou
            lointain avec le monde de l’automobile.
            Les invités parlerons de leur expérience avec Vinci Eco Drive, de leur
            point de vue sur les deux projets de l’association et aussi en grande
            partie de leur pensées sur le monde automobile actuel, les
            changements qu’imposent notre monde et leur vision de l’avenir.
            Que vous soyez dans les transports en commun, dans votre canapé,
            en train de faire le ménage ou même en voiture, vous décourirez le
            parcours et les meilleures anecdotes de nos invités !
          </p>
        </div>
      </div>
      <a className='lk' name="episodes" href='../#episodes'> </a>
      <div className='episodes'>
        <h1>Les épisodes</h1>
        <iframe title='lap1' className='spot-elmt' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowFullScreen="" loading="lazy"></iframe>
        <p className='center'>
          Tour en cours... D’autres épisodes arrivent vite !
        </p>
      </div>
      <a className='lk' name="plateformes" href='../#plateformes'> </a>
      <div className='spot'>
        <h1 className='black'>Les plateformes</h1>
        <p>
          VedLaps - Le podcast est disponible sur toutes les grandes plateformes de podcast.
        </p>
        <div className='flex_logos'>
            <a href='https://www.deezer.com/fr/show/5608237' target="_blank" rel="noreferrer"><img src={deezer_big} alt="deezer" className='small'></img></a>
            <a href='https://open.spotify.com/show/3KRDSrplsy5jYVssZHm2uM?si=c1047431684d4c0a' target="_blank" rel="noreferrer"><img src={spotify_big} alt="spotify"></img></a>
            <a href='https://www.youtube.com/@vinciecodrive' target="_blank" rel="noreferrer"><img src={youtube_big} alt="youtube" className='small'></img></a>
            <a href='https://music.amazon.fr/podcasts/a53f2fd7-196e-4153-9b67-cf94f1dc437c/vedlaps---le-podcast?refMarker=null' target="_blank" rel="noreferrer"><img src={amazon_big} alt="amazon"></img></a>
          </div>
      </div>
      <div className='episodes'>
        <p></p>
      </div>
    </div>
  );
}

export default Home;