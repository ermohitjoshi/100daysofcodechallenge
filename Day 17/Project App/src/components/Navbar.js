import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <NavLink to = "/Home">Home</NavLink>
        <NavLink to = "/CheckOut">Cart(0)</NavLink>
    </div>
  )
}

export default Navbar