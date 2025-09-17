import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Users = () => {
    const {name} = useParams();
    const {id} = useParams();
    return (
        <>
            <h1>Username: {name}   ID: {id}</h1>
        </>
    )
}