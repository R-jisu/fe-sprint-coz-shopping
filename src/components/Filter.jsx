import all from "../assets/all.svg";
import product from "../assets/product.svg";
import category from "../assets/category.svg";
import exhibition from "../assets/exhibition.svg";
import brand from "../assets/brand.svg";

import FilterLi from "./FilterLi";
const Filter = () => {
  const filterArr = [
    { src: all, text: "전체", type: "All" },
    { src: product, text: "상품", type: "Product" },
    { src: category, text: "카테고리", type: "Category" },
    { src: exhibition, text: "기획전", type: "Exhibition" },
    { src: brand, text: "브랜드", type: "Brand" },
  ];
  return (
    <>
      <ul className="flex gap-[2.5rem] mt-[1.5rem] mb-[1.66rem]">
        {filterArr.map((el) => (
          <FilterLi key={el.text} src={el.src} text={el.text} type={el.type} />
        ))}
      </ul>
    </>
  );
};

export default Filter;
