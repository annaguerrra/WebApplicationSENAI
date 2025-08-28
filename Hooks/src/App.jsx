import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text , setText] = useState("")

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <h1>{text}</h1>
    </>
  )
}

export default App
