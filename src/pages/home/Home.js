import React from 'react';
import './Home.css';
import phone from '../../images/iphone.png';
import casque from '../../images/casque.png';
import amazon from '../../images/amazon-music.png';
import apple from '../../images/apple-podcast.png';
import deezer from '../../images/deezer.png';

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
            <a href='/'><img src={amazon} alt="amazon-music"></img></a>
            <a href='/'><img src={apple} alt="apple-podcast"></img></a>
            <a href='/'><img src={deezer} alt="deezer"></img></a>
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
        <iframe title='lap1' className='spot-elmt' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowFullScreen="" loading="lazy"></iframe>
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
  );
}

export default Home;