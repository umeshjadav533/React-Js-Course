import React from 'react'
import { useParams } from 'react-router-dom'
const ProductItem = () => {
    const { id } = useParams();
  return (
    <div>
      <h1>Product-item Page</h1>
      <h2>id: {id}</h2>
    </div>
  )
}

export default ProductItem
