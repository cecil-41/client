import React, {useReducer} from 'react'

const initialState = {
    countA: 0
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return {countA: state.countA + action.value}
        case 'decrement':
            return {countA: state.countA - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function MyCounter2() {
   const[count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>{count.countA}</h1>
        <button onClick={()=> dispatch({type: 'increment', value: 2})} className='btn btn-success me-2'>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement', value: 2})} className='btn btn-warning me-2'>Decrement</button>
        <button onClick={()=> dispatch({type: 'reset'})} className='btn btn-secondary me-2'>Reset</button>
    </div>
  )
}
