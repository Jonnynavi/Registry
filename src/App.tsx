import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { homeLoader } from "./pages/home/homeLoader";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";

import Root from "./pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: homeLoader,
            },
            {
                path: "/search",
                element: <SearchPage />,
                loader: searchLoader,
            },
            {
                path: "/packages/:name",
                element: <DetailsPage />,
                loader: detailsLoader
            }
        ]

    }
])


function App(){
    return <RouterProvider router={router} />
}

export default App;