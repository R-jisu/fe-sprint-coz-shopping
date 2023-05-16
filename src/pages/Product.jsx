import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductInstance from "../components/ProductInstance";

const Product = () => {
  const products = useSelector((state) => state.product.product);
  return (
    <>
      <Filter />
      <ul className="grid grid-cols-4 gap-[1.5rem]">
        {products &&
          products.map((product) => (
            <ProductInstance key={product.id} info={product} />
          ))}
      </ul>
    </>
  );
};

export default Product;
