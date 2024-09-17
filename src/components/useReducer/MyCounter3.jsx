import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action)=>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function MyCounter3() {
   const[count, dispatch] = useReducer(reducer, initialState)
   const[countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Count 1: {count}</h1>
        <button onClick={()=> dispatch('increment')} className='btn btn-success me-2'>Increment</button>
        <button onClick={()=> dispatch('decrement')} className='btn btn-warning me-2'>Decrement</button>
        <button onClick={()=> dispatch('reset')} className='btn btn-secondary me-2'>Reset</button>
        <br/>
        <br/>
        <h1>Count 2: {countTwo}</h1>
        <button onClick={()=> dispatchTwo('increment')} className='btn btn-success me-2'>Increment</button>
        <button onClick={()=> dispatchTwo('decrement')} className='btn btn-warning me-2'>Decrement</button>
        <button onClick={()=> dispatchTwo('reset')} className='btn btn-secondary me-2'>Reset</button>
    </div>
  )
}
