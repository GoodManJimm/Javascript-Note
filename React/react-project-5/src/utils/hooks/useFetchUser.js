import { useState } from "react";
import { useEffect } from "react";

export function useFetchUser(userID)
{

    const userApiurl = "https://jsonplaceholder.typicode.com/users"
    const [userData,setUserData] = useState({})
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState()

    useEffect((e) => 
        {
            const controller = new AbortController()
            setLoading(true)
            fetch(userApiurl + "/" + userID, {signal: controller.signal})
            .then((response) => response.json())
            .then((data) => {
                setUserData(data)
            })
            .catch((err) => {
                setError("No")
            })
            .finally(() => {
                setTimeout(() => 
                    {
                        setLoading(false)
                    },2000)
                })

            return (() => 
                {
                    controller.abort()
                    setLoading(false)
                })
        },[userID])

    return {user : userData, load : loading, error : error};
}