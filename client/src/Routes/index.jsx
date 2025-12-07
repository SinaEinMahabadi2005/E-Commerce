import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import PublicLayout from "../Layout/Public";
import Auth from "../Pages/Auth";
import PrivateLayout from "../Layout/Private";
import Profile from "../Pages/Profile";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: "/auth",
            element: <Auth />,
          },
        ],
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "/products/:categoryId/:categoryName",
        element: <Products />,
      },
      {
        path: "/product-details/:id/:name",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
