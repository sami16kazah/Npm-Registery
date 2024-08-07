import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/details/DetailsPage";
import { SearchLoader } from "./pages/search/SearchLoader";
import { DetailsLoader } from "./pages/details/DetailsLoader";
import { homeLoader } from "./pages/home/homeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader:homeLoader
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
        loader: SearchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage></DetailsPage>,
        loader:DetailsLoader
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
