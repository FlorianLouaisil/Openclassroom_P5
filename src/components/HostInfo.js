import React from 'react';

const HostInfo = ({ host }) => {
  const nameParts = host.name.split(' ');

  return (
    <div className="host">
      
      <h3>
        {nameParts[0]} <br />
        {nameParts[1]}
      </h3>

      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};

export default HostInfo;
