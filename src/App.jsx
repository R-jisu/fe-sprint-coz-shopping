import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "./store/product-slice";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Product from "./pages/Product";
import Bookmark from "./pages/Bookmark";
import Root from "./pages/Root";
import Filter from "./components/Filter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      // index -> 부모 라우트가 현재 활성이면 표시되어야 함을 의미 path='' 대신 index로 사용가능!!
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
    if (window.localStorage.getItem("bookmark") === null) {
      window.localStorage.setItem("bookmark", JSON.stringify([]));
    }
    fetchData();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
