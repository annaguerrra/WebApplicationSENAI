import {useParams} from "react-router-dom"

export const Conditional = () => {
    const {id} = useParams();
    const user= id == '1' ? "Admin" : "Common User"


    return(
        <h2>User: {id} Role: {user}</h2>
)}