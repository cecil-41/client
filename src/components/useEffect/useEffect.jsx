import React, { useEffect, useState } from "react";

export default function UseEffectExample1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `You Clicked Me: ${count} times`;
    console.log("useEffect is called");
  }, [count]);

  return (
    <div>
      <h1 className="text-primary">{count}</h1>

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click Me
      </button>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
    </div>
  );
}

// Another component
export function UseEffectExample2() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logoMousePostion = (e) => {
    console.log("this is mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", logoMousePostion);
  }, []);

  return (
    <div>
      <h1>Mouse Coordinates</h1>
      <h1>
        (X,Y): {x}, {y}
      </h1>
    </div>
  );
}
