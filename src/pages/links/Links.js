import React from 'react';
import './Links.css';
import logo from '../../images/logo_small.png';

function Links() {
  return (
    <div className="Links">
      <img src={logo} alt="logo"></img>
      <h1>Vinci Eco Drive</h1>
      <h2>"Ouvrons la piste de l'innovation"</h2>
      <div className='buttons'>
        <a href="https://www.linkedin.com/company/vinci-eco-drive/" className='linkedin'>LinkedIn</a>
        <a href="https://vinciecodrive.fr" className='website'>Site internet</a>
        <a href="https://www.instagram.com/vinciecodrive/" className='instagram'>Instagram</a>
        <a href="https://twitter.com/VinciEcoDrive" className='twitter'>Twitter</a>
        <a href="https://facebook.com/vinciecodrive/" className='facebook'>Facebook</a>
        <a href="mailto:contact@vinciecodrive.fr" className='contact'>Contact</a>
      </div>
    </div>
  );
}

export default Links;
