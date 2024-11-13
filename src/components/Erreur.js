import React from 'react';
import erreur from '../assets/404.png'
import { Link } from 'react-router-dom';
import '../styles/Erreur.scss';

function Erreur() {
  return (
    <div className="erreur">
      <img src={erreur} alt=""/>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/home" className="link">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Erreur;
 