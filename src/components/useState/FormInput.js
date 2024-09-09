import React, { useState } from "react";

export default function FormInput() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("Select");
  return (
    <div className="text-start">
      <form>
        <label className="form-label">Input Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />

        <label className="form-label mt-2">Input Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control"
          rows="3"
          required
        ></textarea>

        <label className="form-label mt-2">Select Age:</label>

        <select
          className="form-select"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer Not To Say">Prefer Not To Say</option>
        </select>

        <label className="form-label text-primary mt-2">Name: {name}</label>
        <hr />
        <label className="form-label text-primary">Message: {message}</label>
        <hr />
        <label className="form-label text-primary">Age: {age}</label>
      </form>
    </div>
  );
}
