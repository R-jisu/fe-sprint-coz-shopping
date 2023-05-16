const FilterLi = ({ src, text }) => {
  return (
    <li className="flex flex-col items-center justify-center">
      <img src={src} alt="all" />
      <p className="mt-[0.16rem]">{text}</p>
    </li>
  );
};

export default FilterLi;
