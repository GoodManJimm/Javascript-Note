import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import {useState} from 'react'

export function UserDetails({user, setUsers})
{
    const [isEditing,setIsEditing] = useState(false)
    const [userName,setUsername] = useState(user.username)
    const [email,setEmail] = useState(user.email)

    console.log(isEditing);
    return (<div key={user.id}>
        <button onClick={() => 
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
        <b>userName: </b>
        {isEditing ? <input name="username" id="username" value={userName} onChange={
            (e) => 
                {
                    setUsername(e.target.value)
                }
        }/> : <span> {user.username} </span>}
        <br />
        <b>Email: </b>
        {isEditing ? <input name="email" id="email" value={email} onChange=
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