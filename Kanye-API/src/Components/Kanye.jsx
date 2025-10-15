import { useEffect, useState } from "react"; 
import axios from "axios"; // HTTP requests
import { useNavigate } from "react-router-dom"; 

export default function Kanye() {
  const [quote, setQuote] = useState(""); 
  const navigate = useNavigate(); 

  
  useEffect(() => {
    getQuote(); 
  }, []);

  
  const getQuote = async () => {
    try {
      const response = await axios.get("https://api.kanye.rest/"); 
      setQuote(response.data.quote); 
    } catch (error) {
      console.error("Error fetching quote:", error); 
    }
  };

  
  const goAbout = () => {
    navigate("/about"); 
  };

  return (
    <div className="flex flex-col items-center mt-10">
      
      <h1 className="text-black font-serif italic text-2xl text-center">{quote}</h1>
      <h3 style={{ fontFamily: 'cursive' }}> - Kanye West</h3>

      
      <button
        onClick={getQuote}
        style={{ padding: "8px 16px", marginTop: "10px", backgroundColor: "green", color: "white", borderRadius: "6px" }}
      >
        New Quote
      </button>

      
      <button
        onClick={goAbout}
        style={{ padding: "8px 16px", marginTop: "10px", backgroundColor: "blue", color: "white", borderRadius: "6px" }}
      >
        Go to About
      </button>
    </div>
  );
}

