import React from 'react';
import './Home.css';
//import { useState } from 'react';

function Home() {

  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: "keya3VdVj8ZCkw2f3" }).base('appYwEIUwTL8nSpbw');

  /*
  const [source, setSource] = useState({
    title: "",
    element_title: "",
    element_description: ""
  });
  */

  function getPodcasts() {
    base('laps').select({
        view: "Grid view"
    }).firstPage(function page(err, records) {
        if (err) { console.error(err); return; }
        document.getElementById('laps').innerText = "";
        records.forEach(async function(record) {
            var url = await record.get('Image')[0].url;
            document.getElementById('laps').innerHTML += "<div><img src=" + url + " alt='" + record.get('Title') + "'></img><h2>" + record.get('Title') + "</h2><span>" + record.get('Content') +"</span></div>";
        });
    });
  }

  /*
  fetch("https://anchor.fm/s/d8d0a1f0/podcast/rss")
  .then(res => res.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    //const all = data.documentElement.textContent.split('\n\t\t').map(x => x.replace('\t', ''));
    const title = data.documentElement.attributes[0].ownerElement.firstElementChild.firstElementChild.textContent.toString();
    const element = data.documentElement.childNodes[1].childNodes[37];
    const element_title = element.childNodes[1].textContent;
    const element_description = element.childNodes[3].textContent;
    console.log(data);
    setSource({
      title: title,
      element_title: element_title,
      element_description: element_description
    });
    
  });
  */

  getPodcasts();

  // https://open.spotify.com/embed/playlist/37i9dQZF1DWYVURwQHUqnN?utm_source=generator

  return (
    <div className="Home">
      <h1>VedLaps</h1>
      <h2>Le podcast de Vinci Eco Drive</h2>
      <div className='spot'>
        <iframe title='lap1' className='spot-elmt' src="https://open.spotify.com/embed/show/3KRDSrplsy5jYVssZHm2uM?utm_source=generator" allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className='boxes' id="laps"></div>
    </div>
  );
}

export default Home;