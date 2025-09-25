import './App.css'
import List from './Components/List'
import Profile from './Components/Profile'

import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App