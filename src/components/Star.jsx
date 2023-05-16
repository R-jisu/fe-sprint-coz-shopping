import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/product-slice";

const Star = ({ id }) => {
  const [isBookmark, setIsBookmark] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product);

  useEffect(() => {
    if (products.length !== 0) {
      const productInfo = products.find((el) => el.id === id);
      const { isBookmark } = productInfo;
      setIsBookmark(isBookmark);
    }
  }, [products]);

  const bookmarkHandelr = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(productActions.toggleBookmark(id));
  };

  return (
    <AiFillStar
      onClick={bookmarkHandelr}
      className="cursor-pointer"
      size="1.5rem"
      color={isBookmark ? "#FFD361" : "#DFDFDF"}
    />
  );
};

export default Star;
