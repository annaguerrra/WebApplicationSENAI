import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'


function App() {
  const [count, setCount] = useState(0)
  const [text , setText] = useState("")
  const [hidden, setHidden] = useState(false) // setar invisibilidade
  const [color, setChange] = useState("red")

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/about' element ={<About/>}></Route>
       </Routes>
      </BrowserRouter>

    {hidden && 
      <div>
        <h1>It's here</h1>
      </div>
    }

    <button onClick={() => {setHidden(hidden == true ? false : true)}}>
      Change Visibility
    </button>

    <div style={{backgroundColor: color,color : 'white'}}>
      Changing colors
    </div>

    <button onClick={() => {setChange(color == "red" ? "white": "red")}}>
      Change Color
    </button>


  </>
  )
}


export default App
