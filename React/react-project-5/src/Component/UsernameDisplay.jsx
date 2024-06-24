import { useEffect, useState } from "react"

export function UsernameDisplay({username})
{

    const [timePassed, setTimePassed] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTimePassed(true)
        },1000)
    },[])
    return(
        <div>
            <span>{timePassed && username}</span>
        </div>
    )
}