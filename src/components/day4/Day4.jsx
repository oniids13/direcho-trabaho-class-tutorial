import { useState } from "react";

// Higher Order Component (HOC) to add loading functionality
export const UserInfo = ({ name, greeting }) => (
  <h1>
    Hello, {name} {greeting}
  </h1>
);

export const withLoader = (Component) => {
  return function WrapperComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading.. Please wait</div>;
    }

    return <Component {...props} />;
  };
};

// Lesson for use state

export const MyCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter >= 10) {
      setCounter(0);
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}>Increase</button>
      <p>Click counter: {counter}</p>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export const MyInput = () => {
  const [textInput, setTextInput] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;

    setTextInput(value);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input type="text" onChange={handleOnChange} value={textInput} />
      <p>{textInput}</p>
    </div>
  );
};
