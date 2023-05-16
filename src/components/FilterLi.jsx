import { useDispatch } from "react-redux";
import { productActions } from "../store/product-slice";

const FilterLi = ({ src, text, type }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={() => {
        dispatch(productActions.setFilter(type));
      }}
    >
      <img src={src} alt="all" />
      <p className="mt-[0.16rem]">{text}</p>
    </li>
  );
};

export default FilterLi;
