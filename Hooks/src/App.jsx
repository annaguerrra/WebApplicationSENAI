import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text , setText] = useState("")
  const [hidden, setHidden] = useState(false) // setar invisibilidade
  const [change, setChange] = useState(false)

  return (
    <>
    {hidden && 
      <div>
        <h1>It's here</h1>
      </div>
    }

    <button onClick={() => {setHidden(hidden == true ? false : true)}}>
      Change Visibility
    </button>
    </>
  )
}


export default App
