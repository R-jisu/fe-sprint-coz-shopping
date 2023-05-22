import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InfiniteContainer from "../components/InfiniteContainer";

const Product = () => {
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.product.product);
  const { length: len } = products;

  useEffect(() => {
    if (len !== 0) setData(products);
  }, [len]);

  return <InfiniteContainer data={data} />;
};

export default Product;
