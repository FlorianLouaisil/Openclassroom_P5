import React from 'react';

import MaskGroup from './assets/MaskGroup.png'
import './Home.scss';
import Card from './Card';

function Home() {
  return(
    <div className='ContentHome'>

      <section className='ContentBanner'>
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={MaskGroup} alt=""/>
      </section>

      <section className='card'>
        <Card/>
      </section>


    </div>  
   
  ) 



}

export default Home;
