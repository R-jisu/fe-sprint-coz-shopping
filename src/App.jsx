import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      // index -> 부모 라우트가 현재 활성이면 표시되어야 함을 의미 path='' 대신 index로 사용가능!!
      { path: "products", element: <Product /> },
      { path: "bookmark", element: <Bookmark /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
