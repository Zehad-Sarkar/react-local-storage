import React, { useEffect, useState } from 'react';
import { addToDb, removeFromDb } from '../Utilities/LocalStorage';

const JsonGenerator = () => {
  // const json = [
  //   {
  //     _id: "641dca0b9335e22c33fb66fa",
  //     price: 374,
  //     name: "Herman Browning",
  //   },
  //   {
  //     _id: "641dca0b4fd2cd6f2f937949",
  //     price: 371,
  //     name: "Patrick Berg",
  //   },
  //   {
  //     _id: "641dca0b9101fef2c7ba5e25",
  //     price: 392,
  //     name: "Jacobson Woodard",
  //   },
  //   {
  //     _id: "641dca0b8eeb7f1a0f6247e3",
  //     price: 376,
  //     name: "Austin Garza",
  //   },
  //   {
  //     _id: "641dca0b8801748b505219dc",
  //     price: 469,
  //     name: "May Dillard",
  //   },
  //   {
  //     _id: "641dca0b4933238b27b165c3",
  //     price: 300,
  //     name: "Miriam Buchanan",
  //   },
  // ];

  //upper api data from custom json in public
  const [json, setJson] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
    .then(data=>setJson(data))
  },[])
  return (
    <div>
      <h1>Json fake generator</h1>
      {
        json.map(jsn=> <JsnView {...jsn} key={jsn._id}></JsnView>)
      }
    </div>
  );
};
function JsnView(props) {
  const { _id, name, price } = props;

  //add to cart event handler
  const addToCart = (_id) => {
    // console.log("item added",_id);
    addToDb(_id)
  };

  //remove event handler
  const removeFromCart = (_id) => {
   removeFromDb(_id)
  };
  return (
    <div className="card">
      <h1>Id: {_id}</h1>
      <h2>Name: {name}</h2>
      <h2>Price: {price}</h2>
      <button className="cart" onClick={() => addToCart(_id)}>
        Add to cart
      </button>
      <button className="cart" onClick={() => removeFromCart(_id)}>
        Remove
      </button>
    </div>
  );
}

export default JsonGenerator;