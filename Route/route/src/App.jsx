import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Link, Route, Routes, useParams} from 'react-router-dom'
import {Users} from './Components/Users'
import './App.css'
import { UserList } from './Components/UserList'

function App() {

  return (
    <>
    <BrowserRouter>
      <header>
        <nav>
          <Link to={"/Users/Anna/1"}> User1 </Link>
          <Link to={"/Users/Thayna/2"}> User2 </Link>
          <Link to={"/Users/FeFito/3"}> User3 </Link>
        </nav>
      </header>

      <Routes>
        <Route path='/Users/:name/:job/:id' element = {<Users/>}> </Route>
        <Route path='/userlist' element = {<UserList/>}> </Route>
      </Routes>
      </BrowserRouter>

    </>
    
  )
}

export default App
