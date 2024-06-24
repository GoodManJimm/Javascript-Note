import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import PostContentButton from "./PostContentButton";


export function PostContent()
{
    const userContextData = useContext(UserContext)

    return (
        <div>
            <div>
                <span>Content</span>
                <br />
                <span onClick={(e) => {
                    userContextData.setUserData(...userContextData)
                }}>{userContextData.email}</span>
                <br />
                <br />
            </div>
        </div>
    )
}