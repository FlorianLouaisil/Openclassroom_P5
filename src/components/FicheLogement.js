import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import '../styles/FicheLogements.scss';
import Collapse from './Collapse';

import EtoilePleine from '../assets/EtoilePleine.png';
import EtoileVide from '../assets/EtoileVide.png';

import NavGauche from '../assets/NavGauche.png';  
import NavDroite from '../assets/NavDroite.png';  

function FicheLogement() {
  const { id } = useParams(); // Récupère l'id depuis l'URL
  const navigate = useNavigate(); // Gère la navigation
  const [logement, setLogement] = useState(null); // Stocke le logement sélectionné
  const [logements, setLogements] = useState([]); // Stocke tous les logements

  useEffect(() => {
    fetch('../data/items.json')
      .then(response => response.json())
      .then(data => {
        setLogements(data); 
        const logementData = data.find(item => item.id === id); 
        setLogement(logementData); 
      })
  }, [id]);  

  // Chargement du logement
  if (!logement) {
    return <div>Charment du logement</div>;
  }

  // Fonction pour afficher les étoiles
  const Etoile = (note) => {
    const etoile = [];
    for (let i = 1; i <= 5; i++) {
      etoile.push(
        <img className='ImgEtoile' key={i} src={i <= note ? EtoilePleine : EtoileVide} alt='' />
      );
    }
    return etoile;
  };


  //Logement précédent
  function ImagePrecedente(){
    const indexActuel = logements.findIndex(l => l.id === logement.id);
    let logementPrecedent;

    if (indexActuel > 0) {
      logementPrecedent = logements[indexActuel - 1];
    } 
    else {
      logementPrecedent = logements[logements.length - 1];
    }
    navigate(`/ficheLogement/${logementPrecedent.id}`);
  };
  
  //Logement suivante
  function ImageSuivante(){
    const indexActuel = logements.findIndex(l => l.id === logement.id);
    let logementSuivant;

    if (indexActuel < logements.length - 1) {
      logementSuivant = logements[indexActuel + 1];
    } 
    else {
      logementSuivant = logements[0];
    }
    navigate(`/ficheLogement/${logementSuivant.id}`);
  };

  return (
    <div className="fiche-logement">
      <div className="imgbanner">
   
        <button onClick={ImagePrecedente} className="arrow-button left">
          <img src={NavGauche} alt="Flèche gauche" />
        </button>
    
        <img src={logement.cover} alt={logement.title} className="cover-image"/>

        <button onClick={ImageSuivante} className="arrow-button right">
          <img src={NavDroite} alt="Flèche droite" />
        </button>

      </div>

      <div className='InfoLogement'>
        <div className='ContenuGauche'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className='tags'>
            {logement.tags.map((tag, index) => (
                <div className='tag' key={index}>{tag}</div>
            ))}
          </div>
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
            {Etoile(parseInt(logement.rating))}
          </div>
        </div>
      </div>

      <div className='collapse'>
        <div className='CollaspeGauche'>
          <Collapse title="Description" description={logement.description}/>
        </div>

        <div className='CollaspeDroite'>
          <Collapse title="Équipements" description={<ul>{logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}</ul>} />
        </div>
      </div>

    </div>
  );
}

export default FicheLogement;