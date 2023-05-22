import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/product-slice";
import "react-toastify/dist/ReactToastify.css";
import { toastActions } from "../store/toast-slice";

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

  const bookmarkHandler = (e) => {
    e.stopPropagation();
    if (isBookmark) {
      dispatch(productActions.removeBookmark(id));
      dispatch(toastActions.enQue({ action: "remove" }));
    } else {
      dispatch(productActions.addBookmark(id));
      dispatch(toastActions.enQue({ action: "add" }));
    }
  };

  return (
    <AiFillStar
      onClick={bookmarkHandler}
      className="cursor-pointer"
      size="1.5rem"
      color={isBookmark ? "#FFD361" : "#DFDFDF"}
    />
  );
};

export default Star;
