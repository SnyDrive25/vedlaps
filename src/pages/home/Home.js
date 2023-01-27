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
import Navbar from '../../components/navbar/Navbar';

function Home() {

  // https://open.spotify.com/embed/playlist/37i9dQZF1DWYVURwQHUqnN?utm_source=generator

  return (
    <div className="Home">
      <Navbar />
      <div className='master'>
        <div className='left'>
          <h1>VedLaps</h1>
          <h2>Le podcast</h2>
          <p>
            Ce podcast de Vinci Eco Drive
            vous propose de découvrir des
            personnalités en lien avec nos
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
        <h2 className='red'>Le concept</h2>
        <div className='flex'>
          <iframe title='lap1' className='spot-elmt-small' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowFullScreen="" loading="lazy"></iframe>
          <p>
            <strong>Vinci Eco Drive</strong> lance son <strong>propre podcast ! Mensuel,</strong> il vous fera
            découvir <strong>différentes personnalités</strong> ayant un rapport proche ou
            lointain avec le <strong>monde de l'automobile</strong>.
            Les invités parleront de <strong>leur expérience</strong> avec Vinci Eco Drive, de leur
            <strong>point de vue</strong> sur les <strong>deux projets de l'association</strong> et aussi en grande
            partie de leur pensée sur le <strong>monde automobile actuel</strong>, les
            <strong>changements</strong> qu'imposent notre monde et leur <strong>vision de l'avenir</strong>.
            Que vous soyez dans les <strong>transports en commun</strong>, dans votre <strong>canapé</strong>,
            en train de faire le <strong>ménage</strong> ou même en <strong>voiture</strong>, vous décourirez le
            <strong>parcours</strong> et les meilleures <strong>anecdotes</strong> de nos invités !
          </p>
        </div>
      </div>
      <a className='lk' name="episodes" href='../#episodes'> </a>
      <div className='episodes'>
        <h2>Les épisodes</h2>
        <iframe title='lap1' className='spot-elmt' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowFullScreen="" loading="lazy"></iframe>
        <p className='center'>
          Tour en cours... D'autres épisodes arrivent vite !
        </p>
      </div>
      <a className='lk' name="plateformes" href='../#plateformes'> </a>
      <div className='spot'>
        <h2 className='black'>Les plateformes</h2>
        <p>
          <i>VedLaps - Le podcast</i> est <strong>disponible</strong> sur toutes les grandes <strong>plateformes de podcast</strong>.
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