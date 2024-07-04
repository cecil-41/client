import React,{useState} from 'react'

export default function TitleComponent() {
  const [title, setTitle] = useState('React course for the beginners!')
  return (
    <div>
      <h1>{title}</h1>
      <button className='btn btn-success' onClick={()=>setTitle('React course about useState hooks')}>Change Title</button>
    </div>
  )
}
