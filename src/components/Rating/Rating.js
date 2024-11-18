import React from 'react';
import FullStar from '../../assets/EtoilePleine.png';
import StarEmpty from '../../assets/EtoileVide.png';

function Rating({ note }){
  const rating = [];
  const MaximalRating = 5;

  for (let i = 1; i <= MaximalRating; i++) {
    rating.push(
      
      <img key={i} src={i <= note ? FullStar : StarEmpty} alt='ImgEtoile' />
    );
  }
  return <div className="Star">{rating}</div>;
};

export default Rating;
