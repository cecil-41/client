import React, {useContext} from 'react'
import {CountContext} from '../../App'

export default function ComponentA() {
    const coutContext = useContext(CountContext);
  return (
    <div className='my-3'>
        ComponentA:
        <button onClick={()=> coutContext.countDispatch('increment')} className='btn btn-success me-2'>Increment</button>
        <button onClick={()=> coutContext.countDispatch('decrement')} className='btn btn-warning me-2'>Decrement</button>
        <button onClick={()=> coutContext.countDispatch('reset')} className='btn btn-secondary me-2'>Reset</button>
    </div>
  )
}
