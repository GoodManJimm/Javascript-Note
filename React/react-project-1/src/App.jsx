import { UserProfile } from "./Component/UserProfile"
import ReactDOM from 'react-dom/client'

export default function App()
{
    const callMe = () => 
    {
        console.log("Hello");
    }
    return (
    <div>
        <h1>Root Component</h1>
        <UserProfile age = {20} isLoggedIn = {true} 
        favoriteFoods = {[
        {
            name: "sushi",
            id: "Sushi"
        },
        {
            name: "pizza",
            id: "Pizza"
        }
        ]} callMe={callMe} username="bob"
        />
    </div>
    )
}