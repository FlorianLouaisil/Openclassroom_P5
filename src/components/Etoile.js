import React from 'react';
import EtoilePleine from '../assets/EtoilePleine.png';
import EtoileVide from '../assets/EtoileVide.png';

const Etoile = ({ note }) => {
  const etoile = [];
  const maximalRating = 5;
  for (let i = 1; i <= maximalRating; i++) {
    etoile.push(
      <img className='ImgEtoile' key={i} src={i <= note ? EtoilePleine : EtoileVide} alt='ImgEtoile' />
    );
  }
  return <div className="etoile">{etoile}</div>;
};

export default Etoile;
