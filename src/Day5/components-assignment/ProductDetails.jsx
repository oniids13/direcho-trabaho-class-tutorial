import React from "react";

// Displays product's name, description, and price
export default function ProductDetails({ product }) {
  return (
    <div>
      {/* TODO display product name, description, and price */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* TODO: Display the price with 2 decimal places only */}
      <strong>Price: ${product.price.toFixed(2)}</strong>
    </div>
  );
}
