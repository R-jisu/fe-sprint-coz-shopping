import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/product-slice";
import { toast } from "react-toastify";
import { toastProp } from "../values/constValue";
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
      // toast("상품이 북마크에서 제거되었습니다.", toastProp);
    } else {
      dispatch(productActions.addBookmark(id));
      dispatch(toastActions.enQue({ action: "add" }));
      // toast("상품이 북마크에 추가되었습니다.", toastProp);
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
