import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {EpisodePage} from "./pages/EpisodePage";
import {CharactersPage} from "./pages/CharactersPage";

const router = createBrowserRouter([

    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'episodes'}/>
            },

            {
                path: 'episodes', element: <EpisodePage/>
            },

            {
                path: 'characters', element: <CharactersPage/>
            }
        ]
    }
])

export {
    router
}