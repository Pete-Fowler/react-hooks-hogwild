import React, { useState } from 'react';
import HogCard from './HogCard';

function HogBox ({ hogs }) {

  return (
    <div className='ui grid container'>
      {hogs.map(hog => <HogCard 
      key={hog.name} 
      name={hog.name} 
      specialty={hog.specialty} 
      greased={hog.greased} 
      weight={hog.weight} 
      medal={hog['highest medal achieved']} 
      image={hog.image}/>)}
    </div>
  );
}

export default HogBox;