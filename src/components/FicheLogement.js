import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/FicheLogements.scss';
import Collapse from './Collapse';

import EtoilePleine from '../assets/EtoilePleine.png';
import EtoileVide from '../assets/EtoileVide.png';

function FicheLogement() {
  const { id } = useParams(); // Récupère l'id de l'URL
  const [logement, setLogement] = useState(null); // stocke le logement sélectionné

  useEffect(() => {

    fetch('../data/items.json')
      .then(response => response.json())
      .then(data => {
        // Trouver le logement correspondant à l'id dans le fichier JSON
        const logementData = data.find(item => item.id === id); 
        setLogement(logementData); 
      })

  }, [id]);


  // Si le logement n'est pas encore chargé, afficher un message de chargement
  if (!logement) {
    return <div>Chargement</div>;
  }


  // Fonction pour afficher les étoiles
  const NbEtoile = (rating) => {
    const etoile = [];//Tableau

    for (let i = 1; i <= 5; i++) {
      etoile.push(//Fonction ajout dans le tableau
        <img className='ImgEtoile' key={i} src={i <= rating ? EtoilePleine : EtoileVide} alt=''/>
      );
    }
    return etoile;
  };

  function Equipements() {
    return (
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    );
  }



  return (
    <div className="fiche-logement">
      <img src={logement.cover} alt={logement.title} className="cover-image" />


      <div className='InfoLogement'>
        <div className='ContenuGauche'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className='tags'>
            {logement.tags.map((tag, index) => (
                <div className='tag' key={index}>{tag}</div>
            ))}
          </div>


          <Collapse title="Description" description={logement.description}/>
        </div>

        <div className='ContenuDroit'>

          <div className="host">
            <h3>
              {logement.host.name.split(" ")[0]} <br />
              {logement.host.name.split(" ")[1]}
            </h3>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>
   
        
          <div className="etoile">
            {NbEtoile(parseInt(logement.rating))}
          </div>
        
          <Collapse title="Équipements" description={<Equipements />}/>

        </div>



      </div>
    </div>
    
  );
}

export default FicheLogement;
