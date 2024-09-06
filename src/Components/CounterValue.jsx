import React from 'react';
import { useSelector } from 'react-redux';
import { counterReducer } from './../Counter/counterReducer';


const CounterValue = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default CounterValue;
