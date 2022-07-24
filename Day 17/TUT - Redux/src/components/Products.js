import React from 'react'
import { useState , useEffect } from 'react'
import {add} from '../store/cartSlice';
import { useDispatch } from 'react-redux';

function Products() {

  const[products, setProducts]=useState([]);
  useEffect(()=>{
      const fetchProducts = async() => {
          const res = await fetch('https://fakestoreapi.com/products');
          const data = await res.json();
          console.log(data);
          setProducts(data);
      }
      fetchProducts() 
  },[])

  const dispatch = useDispatch();
  const handleAdd = (product) => {
        dispatch(add(product))
  }
  return (
    <div className="productsWrapper">
    {products.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={()=>handleAdd(product)} className="btn">
                Add to cart
            </button>
        </div>
    ))}
</div>
  )
}

export default Products