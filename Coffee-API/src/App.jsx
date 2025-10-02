import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HotCoffee from './Components/HotCoffee'
import IcedCoffee from './Components/IcedCoffee'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/hot" element={<HotCoffee/>}></Route>
          <Route path="/iced" element={<IcedCoffee/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
