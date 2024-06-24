import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { UserDetails } from './Components/UserDetails'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'

function App() {

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")

  window.addEventListener('resize',(e) => 
    {
      console.log(window.innerHeight,window.innerWidth);
    })

  const [users,setUsers] = useState([ 
  {
    id: 1,
    username: "anson",
    email: "anson@gmail.com"
  },
  {
    id: 2,
    username: "bnson",
    email: "bnson@gmail.com"
  }])

  const [counter, setCounter] = useState(users.length + 1)
  console.log(counter);
  
  // const mockUsers = [
  //   {
  //     id: 1,
  //     username: "anson",
  //     email: "anson@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     username: "bnson",
  //     email: "bnson@gmail.com"
  //   }
  // ]

  // const isLogin = false

  // return isLogin ? (<div>
  //   <h1>You are login</h1>
  // </div>) : (<div>
  //   <h1>You are not login</h1>
  // </div>)

  return (<div>
    {/* {mockUsers.map((user) => 
      {
        return (
        <UserDetails key={user.id} user={user}/>
      )
      })}
      <LoginForm/>
      <RegisterForm/> */}

      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(username,email);
          const newUser = 
          {
            id:counter,
            username : username,
            email : email
          }
          setCounter((counter) => counter + 1)
          setUsers((currentUsers) => [...currentUsers,newUser])
        }}>

          <div>
            <label htmlFor="username">Username: </label>
            <br />
            <input id='username' name='username' value={username} onChange={(e) => 
              {
                setUsername(e.target.value)
              }}/>
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <br />
            <input id='email' name='email' value={email} onChange={(e) => 
              {
                setEmail(e.target.value)
              }}/>
          </div>
          <button>Add User</button>
        </form>
      </div>
      {users.map((user) => <UserDetails key={user.id} user={user} setUsers={setUsers}/>)}


  </div>
  )
}

export default App
