import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ImageBannerHome from '../assets/ImageBannerHome.png'
import '../styles/Home.scss';

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
    <div className='ContentHome'>

      <section className='ContentBanner'>
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={ImageBannerHome} alt=""/>
      </section>

      <section className="card">
        {data.map((item, index) => (
          <Link
            to={`/ficheLogement/${item.id}`}
            className="fichelogement"
            key={`${item.id}-${index}`} 
          >
            <img src={item.cover} alt={item.title} />
            <h3>{item.title}</h3>
          </Link>
        ))}
    </section>

    </div>
  );
}

export default Home;