import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./components/HomePage";
import App from "./App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element:<HomePage />
      },
      {
        path: "/heatmap",
        element:<HomePage />
      },
      {
        path: "/community",
        element:<HomePage />
      },
      {
        path: "/askbot",
        element:<HomePage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>
);

export const server = 'https://api.coingecko.com/api/v3';