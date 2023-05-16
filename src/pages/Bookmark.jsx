import Filter from "../components/Filter";

const Bookmark = () => {
  return (
    <div className="flex flex-col items-center mx-[4.75rem]">
      <Filter />
      <ul className="flex flex-wrap gap-[1.5rem] justify-center">
        {/* {filteredData &&
          showingData.length > 0 &&
          showingData.map((product) => (
            <ProductInstance key={product.id} info={product} />
          ))} */}
      </ul>
      {/* {isLoading && <p>상품을 불러오는 중입니다</p>} */}
    </div>
  );
};

export default Bookmark;
