import React from "react";
import Employee from "./Employee";

export default function EmployeeList() {
  const employees = [
    {
      name: "Cecil",
      gender: "Male",
      age: 23,
    },
    {
      name: "Hope",
      gender: "Male",
      age: 22,
    },
    {
      name: "Bejay",
      gender: "Male",
      age: 29,
    },
  ];
  return (
    <div>
      {employees.map((employee) => (
        <Employee
          key={employee.name}
          name={employee.name}
          gender={employee.gender}
          age={employee.age}
        />
      ))}
    </div>
  );
}
