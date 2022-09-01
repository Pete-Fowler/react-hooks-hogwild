import React, { useState } from 'react';

function HogCard({ name, image, specialty, greased, weight, medal }) {
  const [ detail, setDetail] = useState(false);


  function showDetail() {
    detail === true ? setDetail(detail => false) : setDetail(detail => true);
  }

  return (
    <div className='ui eight wide column' style={{overflow: "hidden"}} onClick={showDetail}>
      <img src={image} alt={`${name} the hog`}></img>
      <h3>{name}</h3>
      {detail &&
        <>
          <p>Specialty: {specialty}</p>
          <p>Greased: {greased ? 'Yes' : 'No'}</p>
          <p>Weight: {weight}</p>
          <p>Highest Medal: {medal}</p>
        </>
      }
    </div>
  );
}

export default HogCard;