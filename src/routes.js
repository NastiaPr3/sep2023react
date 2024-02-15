import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailPage} from "./pages/UserDetailPage";
import {PostPage} from "./pages/PostPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
              index: true, element: <Navigate to={'users'}/>
            },

            // {
            //     path: 'users', element: <UsersPage/>, children: [
            //         {
            //             path: ':id', element: <UserDetailPage/>
            //         }
            //     ]
            // }

            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'users/:id', element: <UserDetailPage/>, children: [
                    {
                        path: 'posts', element: <PostPage/>
                    }
                ]
            }

        ]
    }
]);

export {
    router
}