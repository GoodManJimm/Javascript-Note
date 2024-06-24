import { useState } from 'react'
import LoginForm from './LoginForm'
import { UserContext } from './Context/UserContext'
import { PostContainer } from './Component/PostContainer'
import { PostContent } from './Component/PostContent'
import PostContentButton from './Component/PostContentButton'
import { useFetchUser } from './utils/hooks/useFetchUser'
import { useEffect } from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'

function App() {
  
  const [toggle, setToggle] = useState(false)
  const [userData,setUserData] = useState()

  const {user,load, error} = useFetchUser(2)
  // console.log(user,load, error);

  const navigate = useNavigate()

  useEffect(() => 
    {
      if( !load && !error && user)
        {
          setUserData(user)
        }
    },[load,error,user,navigate])


  return (

  <UserContext.Provider value={{...userData,setUserData}}>

    <div>
      {load ? 'Loading...' : <PostContainer/>}
      <br />

      <button onClick={(e) => {
        setToggle((current) => !current)
        console.log(toggle);
      }}>Click me toggle</button>
      
      
      
      {/* toggle group */}
      
      {toggle && <LoginForm/>}
      {toggle && <PostContainer/>}
      {toggle && <PostContent/>}
      {toggle && <PostContentButton/>}



      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/users">Users</Link>
          </li>
          <li>
          <Link to="/blog-posts">Blog</Link>
          </li>
        </ul>
      </nav>

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

      <Outlet/>
    </div>
    </UserContext.Provider>
  )
}

export default App
