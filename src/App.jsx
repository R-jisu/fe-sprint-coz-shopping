import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "./store/product-slice";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Product from "./pages/Product";
import Bookmark from "./pages/Bookmark";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      {
        path: "products/list",
        element: <Product />,
      },
      {
        path: "bookmark",
        element: <Bookmark />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await fetch(
      "http://cozshopping.codestates-seb.link/api/v1/products"
    );
    const data = await response.json();
    dispatch(productActions.storeFetchedData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
