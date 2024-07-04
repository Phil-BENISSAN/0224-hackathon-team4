import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Introduction from './pages/Introduction.jsx';
import Homepage from './pages/Homepage.jsx';
import ShopDetails from "./pages/ShopDetails.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Introduction />
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/shop/:id",
        element: <ShopDetails />,
        loader: async ({ params }) => {
          const response = await fetch("/data.json");
          const data = await response.json();
          const shop = data.Sheet1.find(item => item.id === parseInt(params.id, 10));
          if (!shop) {
            throw new Response("Not Found", { status: 404 });
          }
          return shop;
        }
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
