import { useContext } from "react"
import {PostContent} from "./PostContent"
import { UserContext } from "../Context/UserContext"

export function PostContainer()
{
    const userContextData = useContext(UserContext)

    // console.log(userContextData);
    return (
        <div>
            <div>
                <span>Container</span>
            </div>
            <div>{userContextData.name}</div>
            <div>{userContextData.id}</div>
            <div>{userContextData.email}</div>
            <div>{userContextData.username}</div>
            <br />
        </div>
    )
}