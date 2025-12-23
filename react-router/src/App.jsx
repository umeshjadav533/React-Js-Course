import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import ProductItem from './ProductItem'
import Phone from './Phone'
import Macbook from './Macbook'
import Laptop from './Laptop'

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '10px'}}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/product-item/10'>Product-item</Link>
        <Link to='/product'>product</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product-item/:id' element={<ProductItem />} />
        {/* Nested Routes */}
        <Route path='/product' element={<Product />}>
          <Route path='phone' element={<Phone />} />
          <Route path='macbook' element={<Macbook />} />
          <Route path='laptop' element={<Laptop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
