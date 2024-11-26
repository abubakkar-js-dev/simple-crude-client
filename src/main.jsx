import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './App.css'

import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import Update from "./pages/Update.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/update/:id',
    element: <Update />,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  },
  {
    path: '/newPage',
    element: <h2>Hello world</h2>
  },
  {
    path: '*',
    element: <h2>Error occured</h2>
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
