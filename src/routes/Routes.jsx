import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";
import Blog from "../pages/Blog";
import Recipes from "../pages/Recipes";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://chef-server-kamrul25.vercel.app/chef"),
      },
      {
        path: "chef/:id",
        element: <Recipes></Recipes>,
        loader: ({ params }) =>
          fetch(`https://chef-server-kamrul25.vercel.app/chef/${params.id}`),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default routes;
