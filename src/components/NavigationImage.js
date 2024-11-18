import React, { useState } from 'react';
import NavGauche from '../assets/NavGauche.png';
import NavDroite from '../assets/NavDroite.png';

function NavigationImage({ pictures }){
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function Navigation(direction) {
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : pictures.length - 1));
    } 
    else if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex < pictures.length - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <section className="imgbanner">

      <button onClick={() => Navigation('prev')} className="arrow-button left">
        <img src={NavGauche} alt="Flèche gauche" />
      </button>

      <img src={pictures[currentImageIndex]}  className="cover-image" alt="ImageLogement" />

      <button onClick={() => Navigation('next')} className="arrow-button right">
        <img src={NavDroite} alt="Flèche droite" />
      </button>
      
    </section>
  );
};

export default NavigationImage;
