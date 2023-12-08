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
import LoginPage from "./components/loginSignup/login";
import Chart from "./components/Chart"
import FeedbackForm from "./components/feedback/Feedback";

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
        element:<Heatmap />,
      },
      {
        path: "/community",
        element:<Community />
      },
      {
        path: "/askbot",
        element:<Askbot />
      },
      {
        path: "/chart/:id",
        element: <Chart />
      },
      {
        path: "/feedback",
        element: <FeedbackForm />
      }
    ],
  },
  {
    path: "/login",
    element:<LoginPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>
);

export const server = 'https://api.coingecko.com/api/v3';