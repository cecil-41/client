import React, {useEffect, useRef} from 'react'

export default function FocusInput() {
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const inputRef = useRef(null)
  
  return (
    <div class="mb-3">
      <label htmlFor='exampleFormControlInput1" class="form-label'>Input</label>
      <input ref={inputRef} type='text' className='form-control'/>
    </div>
  )
}
