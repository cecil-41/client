import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const initialCount = 0;
  return (
    <div className="bg-tertiary">
      <h1 className="text-info">{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-success w-25 mx-2"
      >
        +Count
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="btn btn-danger w-25 mx-2"
      >
        -Count
      </button>
      <button
        onClick={() => setCount(initialCount)}
        className="btn btn-warning w-25 mx-2"
      >
        Reset
      </button>
    </div>
  );
}
