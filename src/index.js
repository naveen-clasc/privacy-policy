import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Terms from "./Terms";
import Privacy from "./Privacy";
const router = createBrowserRouter([
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/terms-and-conditions",
    element: <Terms />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
