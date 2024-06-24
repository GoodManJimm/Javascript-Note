import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import PostContentButton from "./PostContentButton";


export function PostContent()
{
    const userContextData = useContext(UserContext)

    return (
        <div>
            <div>
                <h3>Post Content</h3>
                <br />
                <div>
                    {userContextData.email}
                    <PostContentButton/>
                </div>
            </div>
        </div>
    )
}