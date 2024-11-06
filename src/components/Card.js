
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/items.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data); 

      })

  },[]);

  return (
    <div className='voiture'>
      {data.map(item => (
      // <Link to={`/ficheLogement/${item.id}`} className='test' key={item.id}></Link>
      <Link to={`/ficheLogement/`} className='test' key={item.id}>
          <img src={item.cover} alt={item.title} />
          <h3>{item.title}</h3>
        </Link>
      ))}
    </div>
  );


};

export default Card;