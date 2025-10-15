import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Kanye from "./Components/Kanye";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Kanye</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Kanye />} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
