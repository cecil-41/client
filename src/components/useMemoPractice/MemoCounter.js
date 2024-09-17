import React, { useState, useMemo } from "react";

export default function MemoCounter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const incrementA = () => {
    setCounterA(counterA + 1);
  };
  const incrementB = () => {
    setCounterB(counterB + 2);
  };

  const evenNumber = useMemo((result)=>{
    let i = 0
    while(i < 200000000) i ++
    result = counterA % 2 === 0
    return result
  }, [counterA])

  return (
    <div>
      <div>
        <h1>Counter A is: {counterA} {evenNumber ? "Even" : "Odd"}</h1>
        <button onClick={incrementA} className={"btn btn-primary"}>
          Increment A
        </button>
      </div>
      <div>
        <h1>Counter B is: {counterB}</h1>
        <button onClick={incrementB} className='btn btn-primary'>
          Increment B
        </button>
      </div>
    </div>
  );
}
