import React from "react";

export default function Inline() {
    const heading = {
        fontSize: '100px',
        color: 'purple'
    }
  return (
    <div>
        <h1 style={heading}>This is inline styling</h1>
        <h2 style={heading}>Second h tag styling</h2>
    </div>
  )
}
