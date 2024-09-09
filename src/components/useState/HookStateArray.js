import React, { useState } from "react";

export default function HookStateArray() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

// This functional array it spreads the existing items array and adds/append a new object with a unique id and the name from the input field.
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        name: name,
      },
    ]);
  };
  return (
    <div className="text-start">
      <h2 className="h2">Add Employee</h2>
      <label>Employee Name</label>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary w-25 my-3" onClick={() => addItems()}>
        Add
      </button>

      <ul class="list-group">
        {items.map((item) => (
          <li class="list-group-item" key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
