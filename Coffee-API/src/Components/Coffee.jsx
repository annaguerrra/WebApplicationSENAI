// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Coffee(){
//     const [coffees, setCoffee] = useState([])
//     const navigate = useNavigate()


//     useEffect(() => {
    
//     }, [])

//     const getCoffees = async () => {
//         const response = await axios.get('https://api.sampleapis.com/coffee')
//         setCoffee(response.data)
//     }

//     const chooseHotType = (coffees) => {
//         navigate('/hot')
//     }

//     const chooseIcedType = (coffees) => {
//         navigate('/iced')
//     }
// }
// return(
//     <>
//         <h2>Choose your Coffee Type</h2>
//        <ul>
//             {coffees.map( hots => (
//                 <li
//                 key={hots.id}
//                 onClick={() => chooseHotType(hots)}
//                 style={{cursor: 'pointer', marginBottom: '8px', bor}}>
                
//                 </li>
//             )

//             )}
//        </ul>
//     </>
// )