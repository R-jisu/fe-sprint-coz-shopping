import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductInstance from "../components/ProductInstance";

const Product = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [showingData, setShowingData] = useState([]);
  const [startIndex, setStartIndex] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] =
    useState("상품을 불러오는 중입니다");
  const type = useSelector((state) => state.filter.type);
  const products = useSelector((state) => state.product.product);
  const inView = useSelector((state) => state.footerInview.isBottom);

  useEffect(() => {
    if (filteredData.length !== 0) {
      setShowingData([...filteredData.slice(0, 12)]);
    }
  }, [filteredData]);

  useEffect(() => {
    if (products.length !== 0) {
      if (type === "All") setFilteredData(products);
      else {
        const filterArr = products.filter((el) => el.type === type);
        setFilteredData(filterArr);
      }
    }
  }, [products, type]);

  useEffect(() => {
    if (startIndex >= 100) {
      setLoadingMessage("모든 상품을 불러왔습니다.");
    }
    if (inView && !isLoading && filteredData.length !== 0) {
      setIsLoading(true);
      setTimeout(() => {
        setShowingData((prev) => [
          ...prev,
          ...filteredData.slice(startIndex, startIndex + 12),
        ]);
        setStartIndex((prev) => prev + 12);
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading, inView]);

  return (
    <div className="flex flex-col items-center mx-[4.75rem]">
      <Filter />
      <ul className="flex flex-wrap gap-[1.5rem] justify-center">
        {filteredData &&
          showingData.length > 0 &&
          showingData.map((product) => (
            <ProductInstance key={product.id} info={product} />
          ))}
      </ul>
      {isLoading && <p>{loadingMessage}</p>}
    </div>
  );
};

export default Product;
