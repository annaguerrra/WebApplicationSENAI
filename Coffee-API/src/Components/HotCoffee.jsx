import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


function HotCoffee(){
    const [coffees, setCoffee] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getCoffees();
    }, [])

    const getCoffees = async () => {
        const response = await axios.get('https://api.sampleapis.com/coffee/hot')
        setCoffee(response.data)
        console.log(response.data.coffees)

    }

    const chooseHotType = (coffees) => {
        navigate('/hot')
    }

    return(
    <>
        <h1 className="text-amber-100 font-bold">Hot Coffees</h1>
       <ul>
            {coffees.map( hots => (
                <li
                key={hots.id}
                onClick={() => chooseHotType(hots)}
                style={{cursor: 'pointer', marginBottom: '8px', borderColor: '#d9351c' }}>
                <h2 className=" text-left text-yellow-200 font-bold">
                    {hots.id}. {hots.title}
                </h2>
                <br />
                <p className="text-left text-orange-200">{hots.description}</p>
                <br />
                <h3 className="text-left text-yellow-800 font-bold"> Ingredients: </h3> 
                <p className="text-left text-orange-200">{hots.ingredients}</p>
                
                <br />
                <img src={hots.image} alt="" width={"250px"} className=" mx-auto flex justify-center items-center" />
                </li>
                )
            )}
       </ul>
    </>
)
}


export default HotCoffee