import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import ProductsAdd from "./ProductsAdd";
import ShowMoreDetail from "./ShowMoreDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsAdd />,
  },
  {
    path: "/detail",
    element: <ProductDetail />,
  },
  {
    path: "/product/:productId",
    element: <ShowMoreDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
