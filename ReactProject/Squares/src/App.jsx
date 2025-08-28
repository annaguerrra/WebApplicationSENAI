import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BlueSquare} from './Components/BlueSquare'
import { RedSquare } from './Components/RedSquare'
import { YellowSquare } from './Components/YellowSquare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlueSquare />
      <RedSquare/>
      <YellowSquare/>
    </>
  )
}

export default App
