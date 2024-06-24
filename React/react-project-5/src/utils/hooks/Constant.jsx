import App from "../../App";
import { BlogPostsPage } from "../../pages/BlogPostsPage";
import { UsersPage } from "../../pages/UsersPage";


export const routes = [
    {
        path: '/',
        element: <App usersData={
            [{
                id: 1,
                username: 'ha',
                email: 'ha@gmail.com'
              }]
        }/>,
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
]