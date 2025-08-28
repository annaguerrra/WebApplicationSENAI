import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Square } from './Components/Square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Square classes = "blue" />
      <Square classes = "red"/>
      <Square classes = "yellow"/>
    </>
  )
}

export default App