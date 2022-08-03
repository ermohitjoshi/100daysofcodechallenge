import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <NavLink   to="/" >Home</NavLink>
        <NavLink   to="/Cart" >Cart</NavLink>
</ul>
    </div>
  )
}

export default Navbar