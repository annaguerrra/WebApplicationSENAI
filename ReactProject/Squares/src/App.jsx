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
      <BlueSquare color = "rgb(0, 131, 192)" />
      <RedSquare color = "rgb(231, 189, 0)"/>
      <YellowSquare color = "rgb(187, 0, 0)"/>
    </>
  )
}

export default App
