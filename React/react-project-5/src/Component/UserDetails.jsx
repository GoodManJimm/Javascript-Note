import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import {useState} from 'react'

export function UserDetails({user, setUsers})
{
    const [isEditing,setIsEditing] = useState(false)
    const [userName,setUsername] = useState(user.username)
    const [email,setEmail] = useState(user.email)

    console.log(isEditing);
    return (<div data-testid={'user-details-' + user.id } key={user.id}>
        <button data-testid={'edit-btn-' + user.id } onClick={() => 
            {
                setIsEditing((currentState) => !currentState)
            }}>Edit</button>

        <button onClick={() => setUsers((currentUsersState) => currentUsersState.filter(
            (currentUser) => currentUser.id !== user.id
            ))}>Delete</button>

        { isEditing && <button onClick={() => 
        {
            setUsers((currentUsersState) => 
                {
                    return currentUsersState.map((currentUser) => 
                        (currentUser.id === user.id) ? {...currentUser,username : userName,email : email} : currentUser
                        )
                })
            setIsEditing(false)
        }
        }>save</button> }

        <br />
        <b>ID: </b>
        <span>{user.id}</span>
        <br />
        {isEditing ? <label htmlFor="username">Username:</label> : <b>userName: </b>}
        {isEditing ? <input aria-label="username" name="username" id="username" value={userName} onChange={
            (e) => 
                {
                    setUsername(e.target.value)
                }
        }/> : <span> {user.username} </span>}
        <br />
        {isEditing ? <label htmlFor="email">Email:</label>: <b>Email: </b>}
        {isEditing ? <input aria-label="email" name="email" id="email" value={email} onChange=
        {
            (e) => 
                {
                    setEmail(e.target.value)
                }
        }/> : <span> {user.email} </span>}
      </div>
)
}

UserDetails.propTypes
{
    user: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        }).isRequired
    setUsers: PropTypes.func.isRequired
}