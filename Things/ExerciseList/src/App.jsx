import { useEffect, useState } from 'react'
import './App.css'; // apenas CSS

function App() {
  const [count, setCount] = useState(0);
  
  const increase = setCount((prev) => prev + 1);
  const decrease = setCount((prev) => prev - 1);
  
  return (
    <div
    style={{ 
      backgroundColor: "gray",
      color: "white",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      width: "300px",
      margin: "50px auto"}}>
      <h1>Counter</h1>
    </div>
  )
}

export default App
