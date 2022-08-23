import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const initialData = 0;
  const [incrementNumber, setIncrementNumber] = useState(initialData);

  const increaseHandler = () => {
    setIncrementNumber(incrementNumber + 1);
  };
  const decreaseHandler = () => {
    if (incrementNumber > 0) {
      setIncrementNumber(incrementNumber - 1);
    } else {
      setIncrementNumber(0);
    }
  };
  return (
    <>
      <h1>{incrementNumber}</h1>
      <div className="container">
        <button className=" btn" onClick={increaseHandler}>
          Increment
        </button>
        <button className=" btn" onClick={decreaseHandler}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
