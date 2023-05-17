import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/organism/Navbar";
import "./App.css";
import Home from "./Components/atoms/Home";
import AboutUs from "./Components/atoms/AboutUs";
import Register from "./Components/atoms/Register";
import Login from "./Components/atoms/Login"
import ErrorPage from "./Components/molecules/ErrorPage/ErrorPage";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "Login",
        element: <Login />,
      }
      
      ,
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);