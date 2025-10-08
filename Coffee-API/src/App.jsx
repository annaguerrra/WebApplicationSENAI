import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HotCoffee from './Components/HotCoffee'
import IcedCoffee from './Components/IcedCoffee'
import Home from './Components/Home'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hot" element={<HotCoffee/>}></Route>
          <Route path="/iced" element={<IcedCoffee/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
