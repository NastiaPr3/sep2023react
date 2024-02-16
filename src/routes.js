import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";

import {UsersPage, UserDetailPage, PostPage, PostDetailsPage} from "./pages";
import {CommentsPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
              index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'users/:id', element: <UserDetailPage/>, children: [
                    {
                        path: 'posts', element: <PostPage/>
                    }
                ]
            },
            {
                path: 'posts/:id', element: <PostDetailsPage/>, children: [
                    {
                        path: 'comments', element: <CommentsPage/>
                    }
                ]
            }

        ]
    }
]);

export {
    router
}