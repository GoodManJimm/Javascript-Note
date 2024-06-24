import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { UsersPage } from './pages/UsersPage.jsx'
import { BlogPostsPage } from './pages/BlogPostsPage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:"/blog-posts",
                element: <BlogPostsPage/>
            }

        ]
    },
    {
        path: 'users',
        element: <UsersPage/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
)
