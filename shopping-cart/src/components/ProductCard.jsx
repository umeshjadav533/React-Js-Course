import React from "react";

const ProductCard = () => {
  return (
    <div class="card shadow-sm h-100 text-center">
      <div class="card-body">
        <h5 class="card-title">Laptop</h5>
        <p class="card-text">$800</p>
        <button class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
