import React from 'react';
import { useState, useEffect, useContext } from 'react';
import CartContext from "../CartContext";


function Product({name , price}) {

  const {addToCart} = useContext(CartContext);

  const [items , setItems ] = useState([]);

  const fakeStore = async() => {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const jsonData = await response.json();
    setItems(jsonData);
  }

  useEffect(()=>{
    fakeStore();
  },[])

  return (
 
    <div className="products">
    <div className="productCard">
    
    {items.map((values) => {
      return(
        <>
        <img src={values.image} style = {{maxHeight: "200px"}} alt="" srcSet="" />
        <div className="detail">
        <p>{values.title}</p>
        <h1>{values.price}</h1></div>      
        <div className="productAction">
            <a href="###">DETAILS</a>
            <button onClick={() => addToCart(name,price)} className="add">ADD TO CART</button>
        </div>
        </>
      )
    })}

    </div>
  </div>
  )
}

export default Product