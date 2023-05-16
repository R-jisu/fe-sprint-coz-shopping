import { useDispatch } from "react-redux";
import { filterActions } from "../store/filter-slice";

const FilterLi = ({ src, text, type }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={() => {
        dispatch(filterActions.setFilter(type));
      }}
    >
      <img src={src} alt="all" />
      <p className="mt-[0.16rem]">{text}</p>
    </li>
  );
};

export default FilterLi;
