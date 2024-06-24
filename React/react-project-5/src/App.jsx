import { useState } from 'react'
import LoginForm from './LoginForm'
import { UserContext } from './Context/UserContext'
import { PostContainer } from './Component/PostContainer'
import { PostContent } from './Component/PostContent'
import PostContentButton from './Component/PostContentButton'
import { useFetchUser } from './utils/hooks/useFetchUser'
import { useEffect } from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'
import {UserDetails} from './Component/UserDetails'

function App({usersData}) {
  
  const [toggle, setToggle] = useState(true)

  const [userData,setUserData] = useState({
    id: 7000,
    username: 'johnny',
    email: 'johnny@gmail.com',
    name: 'Johnny',
    setUserData: () => {}
   })

  const [users,setUsers] = useState(usersData)

  const {user,load, error} = useFetchUser(2)
  // console.log(user,load, error);

  // const navigate = useNavigate()

  useEffect(() => 
    {
      if( !load && !error && user)
        {
          setUserData(user)
        }
    },[load,error,user])


  return (
  <> 

    {users.map((user) => (
      <UserDetails key={user.id} user={user} setUsers={setUsers} />
    ))}

    <UserContext.Provider value={{...userData,setUserData}}>

      <div>
        {/* {load ? 'Loading...' : <PostContainer/>} */}
        <br />

        <button onClick={(e) => {
          setToggle((current) => !current)
          console.log(toggle);
        }}>Click me toggle</button> 
        
        
        
        
        {/* {toggle && <LoginForm/>} */}
        {toggle && <PostContainer/>}
        {/* {toggle && <PostContent/>}
        {toggle && <PostContentButton/>} */}
        
      </div>
    </UserContext.Provider> 


    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/users">Users</Link>
        </li>
        <li>
        <Link to="/blog-posts">Blogs</Link>
        </li>
      </ul>
    </nav>
    {/*
    <div>
      <label htmlFor="data">Enter Data</label>
      <input type="text" id='data' onChange={(e) => {
        console.log(e.target.value);
        if (e.target.value.length > 10)
          {
            navigate('/blog-posts',{
              state: {
                posts: [{
                  id: 1,
                  title: "hello world",
                  content: "Welcome to my first post"
                },{
                  id: 2,
                  title: "hello world",
                  content: "Welcome to my second post"
                },],
              }
            })
          }
      }} />
    </div>
    {/* outlet decide where the chilren element appear */}
    <Outlet/> 
    
  </>
  )
}

export default App
