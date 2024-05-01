import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Overview from "./Components/Overview";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
