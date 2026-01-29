import React from 'react'
import { Link } from 'react-router-dom'

const NaVBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to='/' className="navbar-brand fw-bold">🛒 MyShop</Link>
        <div>
          <Link to='/' className="nav-link d-inline me-3 text-white">Home</Link>
          <Link to='/cart' className="nav-link d-inline text-white">Cart (2)</Link>
        </div>
      </div>
    </nav>
  )
}

export default NaVBar
