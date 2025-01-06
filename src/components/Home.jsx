// src/components/HomePage.jsx
import React from "react";
import productData from "../assets/product.json";
import Product from "./Product";

const HomePage = () => {
  console.log(productData);

  return (
    <div>
      {productData.map((product) => (
        <div key={product.id}>
          {/* <h2>{product.name}</h2> */}
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
