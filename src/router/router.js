import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Layout from "../pages/layouts/Layout";
import MovieDetail from "../pages/MovieDetail.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);
export default router;
