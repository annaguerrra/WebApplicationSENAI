import { useEffect, useState } from "react"; 
import axios from "axios"; // HTTP requests
import { useNavigate } from "react-router-dom";

import kanye01 from "../assets/kanye01.jpg"; 
import kanye02 from "../assets/kanye02.jpg"; 
import kanye03 from "../assets/kanye03.jpg";
import kanye04 from "../assets/kanye04.jpg";
import kanye05 from "../assets/kanye05.jpg";  
import kanye06 from "../assets/kanye06.jpg";
import kanye07 from "../assets/kanye07.jpg"; 
import kanye08 from "../assets/kanye08.jpg";
import kanye09 from "../assets/kanye09.jpg";
import kanye10 from "../assets/kanye10.jpg"; 
import kanye11 from "../assets/kanye11.jpg";
import kanye12 from "../assets/kanye12.jpg";
import kanye13 from "../assets/kanye13.jpg"; 
import kanye14 from "../assets/kanye14.jpg";
import kanye15 from "../assets/kanye15.jpg"; 


export default function Kanye() {
    const listImages = [
        kanye01, kanye02, kanye03, kanye04, kanye05, kanye06, kanye07, kanye08,
        kanye09, kanye10, kanye11, kanye12, kanye13, kanye14, kanye15];
    const [quote, setQuote] = useState(""); 
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate(); 

  
    useEffect(() => {
        getQuote(); 
    }, []);

  
    const getQuote = async () => {
        try {
            const response = await axios.get("https://api.kanye.rest/"); 
            setQuote(response.data.quote); 
            setCurrent((prev) => (prev + 1) % listImages.length)} 
        catch (error) {
            console.error("Error fetching quote:", error); 
        }
    };

  
  const goAbout = () => {
    navigate("/about"); 
  };

  return (
    <div className="flex flex-col items-center mt-10">
      
      <img src={listImages[current]} alt="ye" width={"300px"}/>

      <h1 className="text-black font-serif italic text-2xl text-center">{quote}</h1>
      <h3 style={{ fontFamily: 'italic', fontSize: '40px'}}> - Kanye West</h3>
      
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

