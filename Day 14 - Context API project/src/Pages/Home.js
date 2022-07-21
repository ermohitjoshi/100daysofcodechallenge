import React from 'react'
import SearchProducts from '../Components/SearchProducts'
import Product from '../Components/Product'

function Home() {
  return (
    <div className='HomeContainer'>
        <div className="homeHead">
          <h1>STORE</h1>
          <p>This is the Store Page.</p>
        </div>
        <SearchProducts/>
        <Product/>
        
    </div>
  )
}

export default Home