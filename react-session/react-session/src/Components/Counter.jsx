import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);
  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count === 0) {
      alert("No more!");
    } else if (count - 1 < 0) {
      alert("Not Allowed!");
    } else {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increase} style={{ marginRight: "10px" }}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
