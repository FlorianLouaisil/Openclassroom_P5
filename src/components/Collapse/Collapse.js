import React, { useState } from 'react';
import './Collapse.scss';
import FlecheHaut from '../../assets/FlecheHaut.png';

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ContentCollapse">
      <div className="HeaderCollapse">
        <h3>{title}</h3>

        <img
          src={FlecheHaut} 
          onClick={toggleCollapse}
          className={`toggle-icon ${isOpen ? 'rotated' : ''}`} 
          alt="flèche"
        />

      </div>
      <div className={`collapseContent ${isOpen ? 'open' : ''}`}>
        <div>
          {description}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
