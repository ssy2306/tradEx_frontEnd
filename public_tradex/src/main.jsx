import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./components/HomePage";
import Heatmap from "./components/heatmap";
import Community from "./components/community";
import Askbot from "./components/askbot";
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
        element:<Heatmap />
      },
      {
        path: "/community",
        element:<Community />
      },
      {
        path: "/askbot",
        element:<Askbot />
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