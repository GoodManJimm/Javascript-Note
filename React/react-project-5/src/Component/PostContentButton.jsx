import { useContext, useState } from "react"
import { UserContext } from "../Context/UserContext"



export default function PostContentButton()
{
    const {id,setUserData} = useContext(UserContext)
    const [value, setValue] = useState("")

    return (
        <div>
            <div>
                <span>PostContentButton</span>
            </div>
            {id}
            <br />
            <label htmlFor="UpdateName">Update Name:</label>
            <input id="UpdateName"type="text" value={value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
            <button onClick={(e) => 
                {
                    setUserData((currentState) => (
                        {
                            ...currentState, name: value
                        }))
                }}>Update display name</button>
        </div>
    )
}