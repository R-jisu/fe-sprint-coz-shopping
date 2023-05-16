import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductInstance from "../components/ProductInstance";

const Bookmark = () => {
  const [Data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showingData, setShowingData] = useState([]);
  const [startIndex, setStartIndex] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const type = useSelector((state) => state.filter.type);
  const products = useSelector((state) => state.product.bookmarked);
  const { length: len } = products;
  const inView = useSelector((state) => state.footerInview.isBottom);

  useEffect(() => {
    if (len !== 0) setData(products);
  }, [len]);

  useEffect(() => {
    setStartIndex(12);
    setShowingData([]);
    if (type === "All") setFilteredData(Data);
    else {
      const filterArr = products.filter((el) => el.type === type);
      setFilteredData(filterArr);
    }
  }, [Data, type]);

  useEffect(() => {
    setShowingData([...filteredData.slice(0, 12)]);
  }, [filteredData]);

  useEffect(() => {
    if (
      showingData.length >= filteredData.length &&
      showingData.length &&
      filteredData.length
    ) {
      return;
    }
    if (inView && !isLoading && showingData.length !== 0) {
      setIsLoading(true);
      setTimeout(() => {
        setShowingData((prev) => [
          ...prev,
          ...filteredData.slice(startIndex, startIndex + 12),
        ]);
        setStartIndex((prev) => prev + 12);
        setIsLoading(false);
      }, 1000);
    }
  }, [inView, type]);
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
      {isLoading && <p>상품을 불러오는 중입니다</p>}
    </div>
  );
};

export default Bookmark;
