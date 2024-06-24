import { useState, useEffect } from "react";

export default function App(){
    
    const [counter, setCounter] = useState(0)
    const [sync,setSync] = useState(false)
    const [blogPostData,setBlogPostData] = useState({
        title: "",
        body: ""
    })


    useEffect(() => {
        console.log("rendering...");
        document.title = "react-project " + counter

    },[sync])


    useEffect(() => {

        const controller = new AbortController()
        console.log(controller.signal);

        async function fetchUsers()
        {
            try 
            {
                const response = await fetch("https://jsonplaceholder.typicode.com/users",
                    {signal: controller.signal}
                )
                const json = await response.json()
                console.log(json);
                console.log(controller.signal);
            }catch (err)
            {
                console.log(err);
            }
        }
        fetchUsers()
        return () => {
            controller.abort()
        }
        
    },[sync])


    return (
        <div>
            <form onSubmit={(e) => 
                {
                    e.preventDefault()
                    if (blogPostData.body || blogPostData.title)
                        {
                            fetch("https://jsonplaceholder.typicode.com/posts",
                            {
                                method: "POST",
                                body: JSON.stringify({
                                        userID : 1,
                                        title : blogPostData.title,
                                        body : blogPostData.body
                                    }),
                                    headers: {
                                        'Content-type': 'application/json; charset=UTF-8',
                                      },
                            }).then((response) => response.json())
                            .then((data) => {
                                    console.log("Success");
                                    console.log(data);
                                })
                                .catch((err) => {console.log(err);})
                        }
                }
            }>
                <label htmlFor="title">Title : </label>
                <input type="text" id="title" value={blogPostData.title} onChange={(e) => setBlogPostData((currentPost) => ({...currentPost,title : e.target.value}) )}/>
                <br />
                <label htmlFor="title">Body : </label>
                <input type="text" id="body" value={blogPostData.body} onChange={(e) => setBlogPostData((currentPost) => ({...currentPost,body : e.target.value}) )}/>
                <br />
                <button>Create New Post</button>
            </form>



            <div>{blogPostData.title}   {blogPostData.body}</div>
            <div>You clicked the button {counter}</div>
            <button onClick={() => setCounter((counter) => counter + 1)}>Click me</button>
            <br />
            <button onClick={() => setSync((current) => !current)}>Sync</button>
        </div>
    )
}