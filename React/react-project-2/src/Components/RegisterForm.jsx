import { useState } from "react"

export default function RegisterForm()
{
    const[formFields, setFormFIelds] = useState(
        {
            username: "",
            password: "",
            displayname: ""
        })

    console.log(formFields);
    
    // const [username,setUsername] = useState("")
    // const [password,setPassword] = useState("")
    // const [displayname,setDisplayName] = useState("")

    // const isDisable = ! username || !password || !displayname;

    return (
        <form  onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="username">Username:</label>
                <input id="username" value={formFields.username} onChange={(e) => 
                    {
                        setFormFIelds((currentState) => 
                            ({
                                ...currentState,
                                username: e.target.value
                            }))
                    }}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" value={formFields.password} onChange={(e) => 
                    {
                        setFormFIelds((currentState) => 
                            ({
                                ...currentState,
                                password: e.target.value
                            }))
                    }}/>
            </div>
            <div>
                <label htmlFor="displayname">Displayname:</label>
                <input id="displayname" value={formFields.displayname} onChange={(e) => 
                    {
                        setFormFIelds((currentState) => 
                            ({
                                ...currentState,
                                displayname: e.target.value
                            }))
                    }}/>
            </div>
            {/* <button disabled={isDisable}>Sign Up</button> */}
            
        </form>
    )
}