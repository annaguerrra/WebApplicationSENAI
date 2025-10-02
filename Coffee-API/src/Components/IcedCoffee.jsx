import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function IcedCoffee(){
    const [coffees, setCoffee] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getCoffees()
    }, [])

    const getCoffees = async () => {
        const response = await axios.get('https://api.sampleapis.com/coffee/iced')
        setCoffee(response.data)
        console.log(response.data.coffees)
    }

    const chooseIcedType = (coffees) => {
        navigate('/iced')
    }
    return(
    <>
        <ul>
            {coffees.map( iceds => (
                <li
                key={iceds.id}
                onClick={() => chooseHotType(iceds)}
                style={{cursor: 'pointer', marginBottom: '8px', borderColor: '#d9351c' }}>
                {iceds.id} {iceds.title}
                <br />
                {iceds.description}
                <br />
                {iceds.ingredients}
                <br />
                <img src={iceds.image} alt="" width={"150px"} />
                </li>
                )
            )}
       </ul>
    </>
)

}
export default IcedCoffee