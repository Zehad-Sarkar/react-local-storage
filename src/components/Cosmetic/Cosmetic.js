import React from 'react';
import { addToDb1, removeFromDb1 } from '../Utilities/LocalStorage';

const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;

  //add to cart event handler
  const addToCart = (id) => {
    // console.log("item added",id);
    addToDb1(id)
  };

  //remove from local storage
  const removeFromCart = (id) => {
   removeFromDb1(id)
  }
  return (
    <div className="card">
      <h3>Id: {id}</h3>
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <button className="cart" onClick={() => addToCart(id)}>
        Add to cart
      </button>
      <button className="cart" onClick={() => removeFromCart(id)}>
        Remove
      </button>
    </div>
  );
};

export default Cosmetic;