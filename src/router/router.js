import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Layout from "../pages/layouts/Layout";
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
    ],
  },
]);
export default router;
