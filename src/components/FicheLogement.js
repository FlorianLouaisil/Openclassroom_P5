import React from 'react';
import { useParams } from 'react-router-dom';

function FicheLogement() {
  // Récupère les paramètres de l'URL
  const { id } = useParams();

  return (
    <div>
      <h1>Fiche du logement</h1>
      <p>Le logement ID est : {id}</p>
    </div>
  );
}

export default FicheLogement;