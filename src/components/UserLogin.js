import React from 'react'

export default function UserLogin() {
    const isLoged = true;
  return (
    <div>
        {isLoged && 
            <h1>Access granted, welcome!</h1>
        }
    </div>
  )
}

