import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Layouts from "../layouts/Layout";
import AddProduct from "../pages/AddProduct/AddProduct";
import PrivetRoute from "./PrivetRoute";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdataProduct/UpdateProduct";
import MyCart from "../pages/My Cart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://digital-nexa-server.vercel.app/brand"),
      },
      {
        path: "/add/product",
        element: (
          <PrivetRoute>
            <AddProduct />
          </PrivetRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivetRoute>
            <MyCart />
          </PrivetRoute>
        ),
        loader: () => fetch(`https://digital-nexa-server.vercel.app/cart`),
      },
      {
        path: "/update/product/:id",
        element: (
          <PrivetRoute>
            <UpdateProduct />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://digital-nexa-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/products",
        element: (
          <PrivetRoute>
            <Products />
          </PrivetRoute>
        ),
        loader: () => fetch("https://digital-nexa-server.vercel.app/products"),
      },
      {
        path: "/products/:brand",
        element: (
          <PrivetRoute>
            <Products />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://digital-nexa-server.vercel.app/products/${params.brand}`
          ),
      },
      {
        path: "/products/details/:id",
        element: (
          <PrivetRoute>
            <ProductDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://digital-nexa-server.vercel.app/product/${params.id}`),
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
