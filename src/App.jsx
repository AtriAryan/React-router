import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black'>
      <h1 className='text-5xl bg-green-600'>Hello Vite + React!</h1>
      </div>
    </>
  )
}

export default App
