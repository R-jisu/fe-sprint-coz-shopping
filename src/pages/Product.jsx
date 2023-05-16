import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductInstance from "../components/ProductInstance";

const Product = () => {
  const [filteredData, setFilteredData] = useState([]);
  const type = useSelector((state) => state.filter.type);
  const products = useSelector((state) => state.product.product);
  //filter type에 따라서 prodcuts filter진행
  //해당 데이터 렌더링
  useEffect(() => {
    if (products.length !== 0) {
      if (type === "All") setFilteredData(products);
      else {
        const filterArr = products.filter((el) => el.type === type);
        setFilteredData(filterArr);
      }
    }
  }, [products, type]);

  return (
    <div className="flex flex-col items-center mx-[4.75rem]">
      <Filter />
      <ul className="flex flex-wrap gap-[1.5rem] justify-center">
        {filteredData &&
          filteredData.map((product) => (
            <ProductInstance key={product.id} info={product} />
          ))}
      </ul>
    </div>
  );
};

export default Product;
