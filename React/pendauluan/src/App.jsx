import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [genap, setGenap] = useState(0)

  return (
    <>
    <div className='main'> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='card'> 
      <button onClick={() => setGenap((count) => count +2)}>Tombol genap {genap}</button>
      </div>
    </div>
    </>
  )
}

export default App
