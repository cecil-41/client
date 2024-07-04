import React from 'react'

export default function ClickEventHandler() {
    function clickHandler(){
        console.log('You clicked the button.')
    }
  return (
    <div className='mt-3'>
        <button className='btn btn-primary' onClick={clickHandler}>Click Me</button>
    </div>
  )
}
