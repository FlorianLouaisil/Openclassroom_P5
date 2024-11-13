import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/FicheLogements.scss';
import Collapse from './Collapse';
import Etoile from './Etoile';
import NavigationImage from './NavigationImage'; 
import HostInfo from './HostInfo';
import Tags from './Tags';
import Erreur from './Erreur';

function FicheLogement() { 
  const { id } = useParams(); // Récupère l'id depuis l'URL
  const [logement, setLogement] = useState(null); // Stocke le logement sélectionné
  


  useEffect(() => {
    fetch('../data/items.json')
      .then(response => response.json())
      .then(data => {
        const logementData = data.find(item => item.id === id);
        setLogement(logementData);
      })
  }, [id]);

  if (!logement) { 
    if (logement === null){
      console.log("Bonne id")
    }
    else{
      console.log("Mavaise id")
      return(<Erreur />)
    }
    return(<div>Chargement</div>)
  }

  return (
    <div className="fiche-logement">
      <NavigationImage pictures={logement.pictures} />

      <div className='InfoLogement'>

        <div className='ContenuGauche'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div className='ContenuDroit'>
          <HostInfo host={logement.host} />
          <Etoile note={parseInt(logement.rating)} />
        </div>

      </div>

      <div className='collapse'>
        <div className='CollaspeGauche'>
          <Collapse title="Description" description={logement.description} />
        </div>

        <div className='CollaspeDroite'>
          <Collapse title="Équipements" description={<ul>{logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          </ul>}/>
        </div>

      </div>
    </div>
  );
}

export default FicheLogement;
