import React, { useState, useEffect, useRef } from "react";

export default function Timer() {
  const refInterval = useRef()
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    refInterval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(refInterval.current);
    };
  }, []);

  return (
    <div>
      <h1>Time is: {timer}</h1>
      <button type='button' onClick={()=> clearInterval(refInterval.current)} className='btn btn-success'>Clear Timer</button>
    </div>
  );
}
