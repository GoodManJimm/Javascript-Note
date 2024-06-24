import { useContext } from "react"
import { UserContext } from "../Context/UserContext"



export default function PostContentButton()
{
    const {username,setUserData} = useContext(UserContext)

    return (
        <div>
            <div>
                <span>Button</span>
            </div>
            {username}
            <br />
            <button onClick={(e) => 
                {
                    setUserData((currentState) => (
                        {
                            ...currentState, name: "Ha"
                        }))
                }}>Click Me</button>
        </div>
    )
}