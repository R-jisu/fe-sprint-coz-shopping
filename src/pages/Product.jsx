import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductInstance from "../components/ProductInstance";

const Product = () => {
  const type = useSelector((state) => state.filter.type);
  console.log("productpage: ", type);
  const products = useSelector((state) => state.product.product);
  //filter type에 따라서 prodcuts filter진행
  //해당 데이터 렌더링
  return (
    <div className="flex flex-col items-center mx-[4.75rem]">
      <Filter />
      <ul className="flex flex-wrap gap-[1.5rem] justify-center">
        {products &&
          products.map((product) => (
            <ProductInstance key={product.id} info={product} />
          ))}
      </ul>
    </div>
  );
};

export default Product;
