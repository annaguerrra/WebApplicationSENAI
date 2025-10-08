import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HotCoffee from './Components/HotCoffee'
import IcedCoffee from './Components/IcedCoffee'


function App() {

  return (
      <BrowserRouter>
        <header>
          <nav>
            <Link to={"/home"}>Home</Link> | {"    "}
            <Link to={"/hot"}>Hot Coffees</Link> | {"    "}
            <Link to={"/iced"}>Iced Coffees</Link> | {"    "}
          </nav>
        </header>





        <Routes>
          <Route path="/hot" element={<HotCoffee/>}></Route>
          <Route path="/iced" element={<IcedCoffee/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
