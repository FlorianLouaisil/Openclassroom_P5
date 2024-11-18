import React from 'react';
import error from '../../assets/404.png'
import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <div className="error">
      <img src={error} alt="Logo Erreur"/>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/home" className="link">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
 