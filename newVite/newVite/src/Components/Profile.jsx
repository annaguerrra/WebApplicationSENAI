import {useLocation} from 'react-router-dom'

function Profile() {
    const location = useLocation()
    const {user: user} = location.state || {}

    if (!user) return <p>Profile not found</p>

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Tel: {user.phone}</p>
        </div>
    )
}

export default Profile