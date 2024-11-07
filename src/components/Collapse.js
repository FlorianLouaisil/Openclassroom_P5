import React, { useState } from 'react';
import '../styles/Collapse.scss';

import FlecheHaut from '../assets/FlecheHaut.png';


function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ContentCollapse">
      <div className="test">
        <h3>{title}</h3>

        <img
          src={FlecheHaut} 
          onClick={toggleCollapse}
          className={`toggle-icon ${isOpen ? 'rotated' : ''}`}  // Appliquer la classe 'rotated' lorsque ouvert
          alt="flèche"
        />
      </div>
      <div className={`collapseContent ${isOpen ? 'open' : ''}`}>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
