import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root"; 
import Home from "./routes/home";
import Arts from "./routes/arts";
import Payments from "./routes/kupata";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "kupata",
        element: <Payments />,
      },
      {
        path: "arts",
        element: <Arts />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);