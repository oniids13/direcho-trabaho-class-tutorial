import { useState } from "react";

export const BatchedCounter = () => {
  const [count, setCount] = useState(0);

  const handleStartIncrement = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setCount((prev) => prev + 1);
      }, i * 1000);
    }
  };

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={handleStartIncrement}>Start Increment</button>
    </div>
  );
};
