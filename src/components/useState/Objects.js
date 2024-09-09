import React, { useState } from "react";

export default function Objects() {
  const [employee, setEmployee] = useState({ name: "", country: "" });
  return (
    <div className="text-start">
      <label>First Name:</label>
      <input
        type="text"
        className="form-control mb-2"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
      />
      <label>Country</label>
      <input
        type="text"
        className="form-control"
        value={employee.country}
        onChange={(e) => setEmployee({ ...employee, country: e.target.value })}
      />

      <div>
        <p>Name: {employee.name}</p>
        <p>Country: {employee.country}</p>
      </div>
    </div>
  );
}
