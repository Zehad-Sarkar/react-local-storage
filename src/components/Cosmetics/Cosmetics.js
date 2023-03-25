import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotalPrice } from '../Utilities/Calculate';



const Cosmetics = () => {
// array of object that means api by own
  const cosmetics = [
    {id:1, name:'Alta', price:380},
    {id:2, name:'Sonu', price:320},
    {id:3, name:'Maskara', price:200},
    {id:4, name:'ponds', price:300},
    {id:5, name:'maril', price:50},
    {id:6, name:'oil', price:800}
  ]

  // const first = 55;
  // const second = 66;
  // const total = add(first, second);

  const pTotal=getTotalPrice(cosmetics)

  return (
    <div>
      <h1>Cosmetics Storage</h1>
      <h4>cosmetics-total-price: {pTotal}</h4>
      {/* <p>Total: {total}</p> */}

      <h1>Cosmetic details here</h1>
      {/* map on cosmetics array of objects */}
      {cosmetics.map((cosmetic) => (
        <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;