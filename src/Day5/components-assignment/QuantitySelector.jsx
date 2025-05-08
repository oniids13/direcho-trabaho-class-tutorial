import React from "react";

// Displays - button, quantity number, + button
export default function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {/* TODO: Disable this button when quantity is 0 */}

      <button onClick={onDecrease} disabled={quantity === 0}>
        -
      </button>

      <span style={{ margin: "0 1rem" }}>{quantity}</span>

      {/* TODO: Disable this button when quantity is 10 */}
      <button onClick={onIncrease} disabled={quantity === 10}>
        +
      </button>
    </div>
  );
}
