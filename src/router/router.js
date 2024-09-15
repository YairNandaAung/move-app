import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Layout from "../pages/layouts/Layout";
import Contact from "../pages/Contact.js";
import MovieDetail from "../components/MovieDetail.js";
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetail />,
      }
    ],
  },
]);
export default router;
