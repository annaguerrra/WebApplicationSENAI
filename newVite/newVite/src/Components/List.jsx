import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function List() {
  // const [dog, setDog] = useState({})
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
    // setUsers(response.data[8])
  }
  
  const openUserProfile = (user) => {
    navigate('/profile', {state: {user}})
  }

  // useEffect(() => {
  //   getDog();
  // }, [])

  // const getDog = async () => {
  //   const response = await axios.get('https://dog.ceo/api/breeds/image/random')
  //   setDog(response.data)
  return (
    <>
      {/* <img src={dog.message} alt="iamge do dogo" />
      <button onClick={getDog}>Click</button> */}

      <h1>Hello, {users.name}</h1>
        <ul>
            {users.map(user => (
                <li 
                key={user.id}
                onClick={() => openUserProfile(user)}
                style={{cursor: 'pointer', marginBottom: '8px'}}
                >{user.id} - {user.name}</li>
                ))
            }
        </ul> 
    </>
  )
}

export default List
