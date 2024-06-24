import React, { useEffect } from 'react';
// import useDocumentClick from './utils/hooks/useDocumentClick';

export default function LoginForm()
{
    useEffect(() => 
        {
          const resizeEventHandler = (e) => 
          {
            console.log("Window/viewpoint Resized")
          }


          window.addEventListener('resize',resizeEventHandler)
    
          return () => {
              window.removeEventListener('resize',resizeEventHandler)
              console.log("Removing Resize event listener");
              console.log("unmount login form");
            }
        },[]);
    
        // useDocumentClick()
        
        return (
            <form  onSubmit={(e) => 
            {
                e.preventDefault()
                const formData = new FormData(e.target)
                console.log(formData);
                console.log(formData.get("username"));
                const username = formData.get("username")
                const password = formData.get("password")
                // fetch("http://localhost:3001/api/login",{body: 
                // {
                //     username,
                //     password,
                // },
                // method:"POST"})
            }}>
                <label htmlFor="username">Username: </label>
                <br />
                <input type="text" id='username' name='username'
                onChange={(e) => {
                    console.log("Value changed")
                    console.log(e.target);
                    console.log('Username: ' + e.target.value)
    
                }}  onKeyDown={(e) => 
                {
                    console.log(e.key);
                }}/>
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input type="password" name="password" id="password" onChange={(e) => {
                    console.log("Value changed")
                    console.log(e.target);
                    console.log('Password: ' + e.target.value)
    
                }} />
                <br />
                <button>Login</button>
                <br />
            </form>
        )
    
}