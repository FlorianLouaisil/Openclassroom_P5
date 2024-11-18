import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Lodging.scss';
import Collapse from '../Collapse/Collapse';
import Rating from '../Rating/Rating';
import NavigationImage from '../NavigationImage/NavigationImage'; 
import HostInfo from '../HostInfo/HostInfo';
import Tags from '../Tags/Tags';
import Erreur from '../Error/Error';

function Lodging() { 

  const { id } = useParams(); 
  const [logement, setLogement] = useState(null); 

  useEffect(() => {
    fetch('../data/items.json')
      .then(response => response.json())
      .then(data => {
        const logementData = data.find(item => item.id === id);
        setLogement(logementData);
      })
  }, [id]);

  if (!logement) {
    return logement === null ? <div>Chargement</div> : <Erreur />;
  }

  return (
    <main className="lodging">
      <NavigationImage pictures={logement.pictures} />

      <section className='Info'>

        <div className='ContentLeft'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div className='ContentRight'>
          <HostInfo host={logement.host} />
          <Rating note={parseInt(logement.rating)} />
        </div>

      </section>

      <section className='Collapse'>
        <div className='CollapseLeft'>
          <Collapse title="Description" description={logement.description} />
        </div>

        <div className='CollapseRight'>
          <Collapse title="Équipements" description={<ul>{logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          </ul>}/>
        </div>

      </section>
    </main>
  );
}

export default Lodging;
