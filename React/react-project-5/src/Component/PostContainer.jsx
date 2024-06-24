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
            <div>Display Name:{userContextData.name}</div>
            <div>ID: {userContextData.id}</div>
            <div>Email: {userContextData.email}</div>
            <div>Username: {userContextData.username}</div>
            <PostContent/>
            <br />
        </div>
    )
}