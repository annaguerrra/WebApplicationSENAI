import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hidden } from './Components/Hidden'

function App() {
  const [count, setCount] = useState(0)
  const [text , setText] = useState("")
  const [hidden, setHidden] = useState(false)
  const [change, setChange] = useState(false)

  return (
    <>
    <div className='ChangeColor'>
      <button 
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>

        <input type="text" onChange={(e) => setText(e.target.value)}/>

      <h1 className={hidden ? "hide" : "show"}>{text}</h1>

      <button  onClick={() => setHidden(!hidden)}>Change Letter Color</button>
      
        <h1 className={change ? "change" : "redo"}>Changing</h1>
        <button onClick={() => setChange(!change)}>Change div Color</button>
      </div>

    </>
  )
}


export default App
