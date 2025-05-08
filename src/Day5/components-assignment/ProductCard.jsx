import React from "react";
import ProductDetails from "./ProductDetails";
import QuantitySelector from "./QuantitySelector";

// Shows product details and its quantity selector
export default function ProductCard({ product, onQuantityChange }) {
  const [qty, setQty] = React.useState(product.quantity);
  const handleIncrease = () => {
    setQty((prev) => prev + 1);
    onQuantityChange(product.id, qty);
  };

  const handleDecrease = () => {
    setQty((prev) => prev - 1);
    onQuantityChange(product.id, qty);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <ProductDetails product={product} />

      {/* TODO: Hook up quantity change logic */}
      <QuantitySelector
        quantity={product.quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}
