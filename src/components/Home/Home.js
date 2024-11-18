import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageBannerHome from '../../assets/ImageBannerHome.png';
import './Home.scss';

function Home() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('./data/items.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data); 
      })
  },[]);
 
  return (
    <main className="ContentHome">

      {/* Section principale de la bannière */}
      <section className="ContentBanner">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={ImageBannerHome} alt="Bannière d'accueil" />
      </section>

      {/* Section pour les cartes de logement */}
      <section className="Card">
        {data.map((item, index) => (
          <Link
            to={`/lodging/${item.id}`}
            className="lodging"
            key={`${item.id}-${index}`}>

            <img src={item.cover} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="Shadow"></div> 
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;
