import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InfiniteContainer from "../components/InfiniteContainer";

const Bookmark = () => {
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.product.bookmarked);
  const { length: len } = products;

  useEffect(() => {
    setData(products);
  }, [len]);

  return <InfiniteContainer data={data} />;
};

export default Bookmark;
