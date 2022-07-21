import React from 'react';
import {NavLink }  from 'react-router-dom';
import CartContext from '../CartContext';
import { useContext } from 'react';

function Header() {
const {item} =useContext(CartContext);
  return (
    <div>

        <div className="headerBox">
            <h3><NavLink style={{ textDecoration: 'none', fontWeight: 500 , color:'black' }} to= "/">Home </NavLink></h3>
            <h3><NavLink style={{ textDecoration: 'none', fontWeight: 500, color:'black'  }} to="/Checkout"> Cart {item.length}</NavLink></h3>   
        </div>
    </div>
  )
}

export default Header