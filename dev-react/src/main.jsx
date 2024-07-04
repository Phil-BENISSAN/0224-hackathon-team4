import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Homepage from './assets/pages/Homepage.jsx';
import Introduction from './assets/pages/Introduction.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/intro",
        element: <Introduction />
      },
      {
        path: "/",
        element: <Homepage />,
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