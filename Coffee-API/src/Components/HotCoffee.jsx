import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        <h2>Choose your Coffee Type</h2>
       <ul>
            {coffees.map( hots => (
                <li
                key={hots.id}
                onClick={() => chooseHotType(hots)}
                style={{cursor: 'pointer', marginBottom: '8px', borderColor: '#d9351c' }}>
                {hots.id} {hots.title}
                <br />
                {hots.description}
                <br />
                {hots.ingredients}
                <br />
                <img src={hots.image} alt="" width={"150px"} />
                </li>
                )
            )}
       </ul>
    </>
)
}


export default HotCoffee