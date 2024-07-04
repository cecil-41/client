import React from 'react'

export default function Employee(props) {
    const{name, gender, age} = props
    return (
        <div>
            <h1>{`name: ${name} gender: ${gender} age: ${age}`}</h1>
        </div>
    )
}
