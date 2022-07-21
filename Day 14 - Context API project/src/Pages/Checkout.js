import React from 'react';
import CartContext from "../CartContext";
import {useContext} from "react";

function Checkout() {
  const {item} = useContext(CartContext);
  return (
    <div>
      <h1>Name</h1>
        <p>{item.name}</p>
      <h1>price</h1>
        <p>{item.price}</p>
      </div>
  )
}

export default Checkout