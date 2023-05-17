import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import ProductInstance from "../components/ProductInstance";
import filteringData from "../func/filteringData";
import { NumberOfData } from "../values/constValue";

const Bookmark = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showingData, setShowingData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const type = useSelector((state) => state.product.type);
  const products = useSelector((state) => state.product.bookmarked);
  const { length: len } = products;
  const inView = useSelector((state) => state.footerInview.isBottom);

  useEffect(() => {
    setData(products);
  }, [len]);

  useEffect(() => {
    const filteredData = filteringData({ type, data });
    setFilteredData(filteredData);
  }, [data, type]);

  useEffect(() => {
    setPage(1);
  }, [type]);

  useEffect(() => {
    setShowingData([...filteredData.slice(0, NumberOfData * page)]);
  }, [filteredData, page]);

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
        setPage((prev) => prev + 1);
        setIsLoading(false);
      }, 1000);
    }
  }, [inView]);

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
      {isLoading && <Loading />}
    </div>
  );
};

export default Bookmark;
