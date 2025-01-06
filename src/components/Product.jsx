import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.amt}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
