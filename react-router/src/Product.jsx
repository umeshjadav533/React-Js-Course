import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
   
  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to='phone'>Phone</Link>
        <Link to='laptop'>laptop</Link>
        <Link to='macbook'>macbook</Link>
        <Outlet />
      </nav>
    </div>
  )
}

export default Product
