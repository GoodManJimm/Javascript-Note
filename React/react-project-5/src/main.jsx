import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UsersPage } from './pages/UsersPage.jsx'
import { BlogPostsPage } from './pages/BlogPostsPage.jsx'
import { routes } from './utils/hooks/Constant.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
)
