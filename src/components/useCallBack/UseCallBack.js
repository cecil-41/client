import React, { useCallback, useState } from 'react'

export default function UseCallBack() {
    const [count, setCount] = useState(0);
    const [resetValue, setResetValue] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    // Reset value changes based on `resetValue` state, so it should be in the dependency array
    const reset = useCallback(() => {
      setCount(resetValue);
    }, [resetValue]);
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <input
          type="number"
          value={resetValue}
          onChange={(e) => setResetValue(Number(e.target.value))}
          className='form-control my-3'
        />
        <button className='btn btn-success mx-2' onClick={increment}>Increment</button>
        <button className='btn btn-secondary' onClick={reset}>Reset to {resetValue}</button>
      </div>
    );
  }
  
